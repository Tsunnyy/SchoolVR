import React from "react";
import { FormField } from "./FormField";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

let initialVal = {
  name: "",
  email: "",
  message: "",
};

export const FormFeedback = ({ title }) => {
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
      let msg = `Title: ${title} \n\n Feedback: ${form.message}`;
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
        className="col-2"
        name="name"
        value={form.name}
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
        type="textarea"
        placeholder="Feedback* "
        name="message"
        value={form.message}
        className="col-2"
        onChange={handleChange}
        errorMessage={error.message}
      />

      <p className="form-success col-2">{global}</p>

      <div className="form-btn">
        <button className="btn btn-secondary">Send</button>
      </div>
    </form>
  );
};
