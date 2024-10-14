import React, { useState } from "react";
import { FormField } from "./FormField";
import emailjs from "@emailjs/browser";
import Select from 'react-select';

let initialVal = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  responseMethod: [],
};

export const GeneralFormDemo = () => {
  let [form, setForm] = useState(initialVal);
  let [error, setError] = useState(initialVal);
  let [global, setGlobal] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        value.trim() === ""
          ? setError((prevError) => ({ ...prevError, name: "Name is required" }))
          : setError((prevError) => ({ ...prevError, name: "" }));
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
        break;
      case "email":
        value.trim() === "" || !value.includes("@") || !value.includes(".")
          ? setError((prevError) => ({ ...prevError, email: "Email is invalid" }))
          : setError((prevError) => ({ ...prevError, email: "" }));
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
        break;
      case "phone":
        const cleanedPhone = value.replace(/[^0-9]/g, "");
        if (cleanedPhone.length < 10) {
          setError((prevError) => ({ ...prevError, phone: "Phone number must be at least 10 digits" }));
        } else {
          setError((prevError) => ({ ...prevError, phone: "" }));
        }
        setForm((prevForm) => ({ ...prevForm, [name]: cleanedPhone }));
        break;
      case "subject":
      case "message":
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
        break;
      default:
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
        break;
    }
  };

  const handleResponseMethodChange = (selectedOptions) => {
    const values = selectedOptions ? selectedOptions.map(option => option.value) : [];
    setForm((prevForm) => ({ ...prevForm, responseMethod: values }));
  };

  const validateRequiredFields = () => {
    const requiredFields = ["name", "email", "phone", "subject", "message"];
    let isValid = true;
    let newErrorState = {};

    requiredFields.forEach((field) => {
      if (!form[field].trim()) {
        newErrorState[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
        isValid = false;
      } else {
        newErrorState[field] = "";
      }
    });

    if (form.phone.length < 10) {
      newErrorState.phone = "Phone number must be at least 10 digits";
      isValid = false;
    }

    setError((prevError) => ({ ...prevError, ...newErrorState }));

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateRequiredFields()) {
      const msg = `Phone: ${form.phone}\n\n Subject: ${form.subject}\n\n Message: ${form.message}`;
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

  const subjectOptions = [
    { value: 'product_information', label: 'Product Information' },
    { value: 'support', label: 'Support' },
    { value: 'pricing', label: 'Pricing' },
    { value: 'other', label: 'Other' },
  ];

  const responseMethodOptions = [
    { value: 'email', label: 'Email' },
    { value: 'phone', label: 'Phone Call' },
  ];

  return (
    <form action="" className="grid-2" onSubmit={handleSubmit}>
      <FormField
        placeholder="Full Name*"
        name="name"
        value={form.name}
        onChange={handleChange}
        errorMessage={error.name}
      />
      <FormField
        placeholder="Email Address*"
        name="email"
        value={form.email}
        onChange={handleChange}
        errorMessage={error.email}
      />
      <FormField
        placeholder="Phone Number (optional)"
        name="phone"
        value={form.phone}
        onChange={handleChange}
        errorMessage={error.phone}
      />
      <div className="newSelectSection">
        <label htmlFor="subject" className="form-label">
          Subject*
        </label>
        <Select
          options={subjectOptions}
          onChange={(selectedOption) => setForm((prev) => ({ ...prev, subject: selectedOption.value }))}
          className="custom-select-dropdown"
          classNamePrefix={"custom-select-dropdown-inner"}
          id="subject"
        />
        {error.subject && <p className="form-error">{error.subject}</p>}
      </div>
      <FormField
        type="textarea"
        placeholder="Please briefly describe your inquiry*"
        name="message"
        value={form.message}
        onChange={handleChange}
        errorMessage={error.message}
        className="col-2"
      />
      <div className="newSelectSection">
        <label htmlFor="responseMethod" className="form-label">
          Preferred Response Method (optional)
        </label>

        <div className="checkBoxDiv mb-3">
          <div className="checkBoxOuterPart position-relative">
            <input type="checkbox" name="responseMethodEmail" id="responseMethodEmail" />
          </div>
          <label htmlFor="responseMethodEmail">Email</label>
        </div>

        <div className="checkBoxDiv">
          <div className="checkBoxOuterPart position-relative">
            <input type="checkbox" name="responseMethodPhone" id="responseMethodPhone" />
          </div>
          <label htmlFor="responseMethodPhone">Phone</label>
        </div>
      </div>
      <p className="form-success col-2">{global}</p>

      <div className="form-btn">
        <button className="btn btn-secondary w-100">
          Submit Inquiry
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
