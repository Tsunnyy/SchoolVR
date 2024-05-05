import React from "react";
import { FormField } from "../components/FormField";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

let initialVal = {
  name: "",
  email: "",
  message: "",
  school: "",
  country: "",
  state: "",
  designation: "",
  phone: "",
};

export const FormEarlyBird = () => {
  let [form, setForm] = useState(initialVal);
  let [error, setError] = useState(initialVal);
  let [global, setGlobal] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    switch (name) {
  
      case "name":
        // name should just accept alphabets and spaces
        value.trim() === ""
          ? setError((prevError) => ({
            ...prevError,
            name: "Name is required",
          }))
          : setError((prevError) => ({ ...prevError, name: "" }));
        let n = value;
        setForm((prevForm) => ({
          ...prevForm,
          [name]: n.replace(/[^A-Za-z\s.]/g, ""),
        }));
        break;
  
      case "email":
        value.trim() === "" || !value.includes("@") || !value.includes(".")
          ? setError((prevError) => ({
            ...prevError,
            email: "Email is invalid",
          }))
          : setError((prevError) => ({ ...prevError, email: "" }));
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
        break;
  
      case "phone":
        value.trim() === ""
          ? setError((prevError) => ({
            ...prevError,
            phone: "Phone is required",
          }))
          : setError((prevError) => ({ ...prevError, phone: "" }));
  
        setForm((prevForm) => ({
          ...prevForm,
          [name]: value.replace(/[^0-9]/g, ""),
        }));
        break;
  
      case "designation":
        value.trim() === ""
          ? setError((prevError) => ({
            ...prevError,
            designation: "Designation is required",
          }))
          : setError((prevError) => ({
            ...prevError,
            designation: "",
          }));
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
        break;
  
      default:
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
        break;
    }
  };

  const validateRequiredFields = () => {
    const requiredFields = ["name", "phone", "email"];
    let isValid = true;
    let newErrorState = {};

    requiredFields.forEach((field) => {
      if (!form[field].trim()) {
        newErrorState[field] = `${
          field.charAt(0).toUpperCase() + field.slice(1)
        } is required`;
        isValid = false;
      } else {
        newErrorState[field] = "";
      }
    });

    setError((prevError) => ({ ...prevError, ...newErrorState }));

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateRequiredFields()) {
      let msg = `Country: ${form.country}\n\n State: ${form.state}\n\n Phone: ${form.phone}\n\n Designation: ${form.designation}\n\n School: ${form.school}\n\n `;
      emailjs
        .send(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          { name: form.name, email: form.email, message: msg },
          import.meta.env.VITE_PUBLIC_KEY
        )
        .then(() => {
          setGlobal("Thanks for contacting us, we will get back to you soon!");
          setForm(initialVal);
          setTimeout(() => {
            setGlobal("");
          }, 5000);
        });
    }
  };

  return (
    <form action="" className="grid-2" onSubmit={handleSubmit}>
      <FormField
        placeholder="Name*"
        name="name"
        value={form.name}
        className="col-2"
        onChange={handleChange}
        errorMessage={error.name}
      />
      <FormField
        placeholder="Email*"
        name="email"
        className="col-2"
        value={form.email}
        onChange={handleChange}
        errorMessage={error.email}
      />
      <FormField
        placeholder="Phone No*"
        name="phone"
        value={form.phone}
        className="col-2"
        onChange={handleChange}
        errorMessage={error.phone}
      />
      <FormField
        placeholder="School Name"
        name="school"
        value={form.school}
        onChange={handleChange}
        errorMessage={error.school}
        className="col-2"
      />
      <FormField
        placeholder="Designation"
        name="designation"
        className="col-2"
        value={form.designation}
        onChange={handleChange}
        errorMessage={error.designation}
      />

      <FormField
        placeholder="Country"
        name="country"
        value={form.country}
        onChange={handleChange}
        errorMessage={error.country}
      />
      <FormField
        placeholder="State"
        name="state"
        value={form.state}
        onChange={handleChange}
        errorMessage={error.state}
      />

      {/* <FormField
        type="textarea"
        placeholder="Message* "
        name="message"
        value={form.message}
        className="col-2"
        onChange={handleChange}
        errorMessage={error.message}
      /> */}
      <p className="form-success col-2">{global}</p>

      <div className="form-btn col-2    ">
        <button className="btn btn-secondary">
          Send
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.92473 3.52487L15.0581 7.09153C18.2581 8.69153 18.2581 11.3082 15.0581 12.9082L7.92473 16.4749C3.12473 18.8749 1.1664 16.9082 3.5664 12.1165L4.2914 10.6749C4.47473 10.3082 4.47473 9.69987 4.2914 9.3332L3.5664 7.8832C1.1664 3.09153 3.13306 1.12487 7.92473 3.52487Z"
              stroke="#9EA0A8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.5332 10H9.0332"
              stroke="#9EA0A8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};
