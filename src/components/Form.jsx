import React from "react";
import { FormField } from "../components/FormField";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

let initialVal = {
  name: "",
  email: "",
  message: "",
};

export const Form = () => {
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
      case "message":
        value.trim() === ""
          ? setError((prevError) => ({
            ...prevError,
            message: "Message is required",
          }))
          : setError((prevError) => ({
            ...prevError,
            message: "",
          }));
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
        break;
      default:
        break;
    }
  };

  const validateRequiredFields = () => {
    const requiredFields = ["name", "email", "message"];
    let isValid = true;
    let newErrorState = {};

    requiredFields.forEach((field) => {
      if (!form[field].trim()) {
        newErrorState[field] = `${field.charAt(0).toUpperCase() + field.slice(1)
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
    // if (form.name === "") {
    //   setError((prevError) => ({ ...prevError, name: "Name is required" }));
    // } else if (form.email === "") {
    //   setError((prevError) => ({ ...prevError, email: "Email is required" }));
    // } else if (
    //   form.email !== "" &&
    //   !form.email.includes("@") &&
    //   !form.email.includes(".")
    // ) {
    //   setError((prevError) => ({ ...prevError, email: "Email is invalid" }));
    // } else if (form.message === "") {
    //   setError((prevError) => ({
    //     ...prevError,
    //     message: "Message is required",
    //   }));
    // }
    if (validateRequiredFields()) {
      emailjs
        .send(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          form,
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
      {window.location.pathname === "/partnerwithus" ? (
        <>
          <FormField
            placeholder="First Name*"
            name="fname"
            onChange={handleChange}
            value={form.fname}
            errorMessage={error.fname}
          />
          <FormField
            placeholder="Last Name*"
            name="lname"
            onChange={handleChange}
            value={form.lname}
            errorMessage={error.lname}
          />
          <FormField
            placeholder="Company/Organization*"
            name="companyOrOrganization"
            onChange={handleChange}
            value={form.companyOrOrganization}
            errorMessage={error.companyOrOrganization}
          />
          <FormField
            placeholder="Location (Country/Region/City)*"
            name="location"
            onChange={handleChange}
            value={form.location}
            errorMessage={error.location}
          />
          <FormField
            placeholder="Email*"
            name="email"
            onChange={handleChange}
            value={form.email}
            errorMessage={error.email}
          />
          <FormField
            placeholder="Phone*"
            name="phone"
            onChange={handleChange}
            value={form.phone}
            errorMessage={error.phone}
          />
          <FormField
            type="textarea"
            placeholder="Brief Description of Your Experience & Interest in Partnering with SchoolVR"
            name="message"
            onChange={handleChange}
            value={form.message}
            className="col-2"
            errorMessage={error.message}
          />
        </>
      ) : (
        <>
          <FormField
            placeholder="Name*"
            name="name"
            onChange={handleChange}
            value={form.name}
            errorMessage={error.name}
          />
          <FormField
            placeholder="Email*"
            name="email"
            onChange={handleChange}
            value={form.email}
            errorMessage={error.email}
          />
          <FormField
            type="textarea"
            placeholder="Message*"
            name="message"
            onChange={handleChange}
            value={form.message}
            className="col-2"
            errorMessage={error.message}
          />
        </>
      )}



      <p className="form-success col-2">{global}</p>
      <div className="form-btn">
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
    </form >
  );
};
