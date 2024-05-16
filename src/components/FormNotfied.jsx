import React from "react";
import { FormField } from "./FormField";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Axiosinstance } from "../../Axios";

let initialVal = {
  name: "",
  email: "",
  acknowledge: false,
};

export const FormNotfied = ({setModalActive}) => {
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
    } else if (!form.acknowledge) {
      setError((prevError) => ({
        ...prevError,
        acknowledge: "Please acknowledge",
      }));
    } else {
      Axiosinstance.post("api/blog/subscribe", {...form}).then(() => {
        console.log("success");
        setGlobal("Subscribed successfully");
        setTimeout(() => {
          setGlobal("");
          setModalActive(false)
        }, 1000);
      });
    }
  };

  return (
    <form action="" className="grid-2" onSubmit={handleSubmit}>
      <FormField
        placeholder="Name*"
        name="name"
        value={form.name}
        onChange={handleChange}
        errorMessage={error.name}
      />
      <FormField
        placeholder="Email*"
        name="email"
        value={form.email}
        onChange={handleChange}
        errorMessage={error.email}
      />
      <div className="acknowledge">
        <label className="checkbox-container">
          <input
            className="checkmark-input"
            type="checkbox"
            name="acknowledge"
            aria-required="true"
            aria-invalid="false"
            value={form.acknowledge}
            onChange={() => {
              setError(initialVal);

              setForm((prevForm) => ({
                ...prevForm,
                acknowledge: !form.acknowledge,
              }));
            }}
          />
          <p className="text">
            I agree to receive Mails on behalf of School VR
          </p>
        </label>
        <p className="form-error">{error.acknowledge}</p>
      </div>
      <p className="form-success col-2">{global}</p>

      <div className="form-btn">
        <button className="btn btn-secondary">Subscribe</button>
      </div>
    </form>
  );
};
