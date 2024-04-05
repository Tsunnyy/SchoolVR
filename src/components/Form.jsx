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
    setError(initialVal);
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name === "") {
      setError((prevError) => ({ ...prevError, name: "Name is required" }));
    } else if (form.email === "") {
      setError((prevError) => ({ ...prevError, email: "Email is required" }));
    } else if (
      form.email !== "" &&
      !form.email.includes("@") &&
      !form.email.includes(".")
    ) {
      setError((prevError) => ({ ...prevError, email: "Email is invalid" }));
    } else if (form.message === "") {
      setError((prevError) => ({
        ...prevError,
        message: "Message is required",
      }));
    } else {
      emailjs
        .send("service_32o0nv8", "template_643wcce", form, "a6GmJsVm3FEGVnLLO")
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
    <form action="" onSubmit={handleSubmit}>
      <FormField
        placeholder="Name"
        name="name"
        value={form.name}
        onChange={handleChange}
        errorMessage={error.name}
      />
      <FormField
        placeholder="Email"
        name="email"
        value={form.email}
        onChange={handleChange}
        errorMessage={error.email}
      />
      <FormField
        type="textarea"
        placeholder="Message"
        name="message"
        value={form.message}
        onChange={handleChange}
        errorMessage={error.message}
      />
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
    </form>
  );
};
