import React, { useState } from "react";
import { FormField } from "../components/FormField";
import emailjs from "@emailjs/browser";
import Select from 'react-select';

let initialVal = {
  name: "",
  email: "",
  phone: "",
  partnershipType: "",
  proposal: "",
  website: "",
};

export const ColabFormDemo = () => {
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
      case "partnershipType":
      case "proposal":
      case "website":
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
        break;
      default:
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
        break;
    }
  };

  const validateRequiredFields = () => {
    const requiredFields = ["name", "email", "phone", "partnershipType", "proposal"];
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
      const msg = `Phone: ${form.phone}\n\n Partnership Type: ${form.partnershipType}\n\n Proposal: ${form.proposal}\n\n Website: ${form.website}`;
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

  const partnershipOptions = [
    { value: '1', label: 'Educational Partnerships' },
    { value: '2', label: 'Corporate Collaboration' },
    { value: '3', label: 'Technology Partnership' },
    { value: '4', label: 'Other' },
  ];

  const handleSelectChange = (selectedOption) => {
    if (selectedOption) {
      setForm((prevForm) => ({ ...prevForm, partnershipType: selectedOption.label }));
      setError((prevError) => ({ ...prevError, partnershipType: "" }));
    } else {
      setForm((prevForm) => ({ ...prevForm, partnershipType: "" }));
      setError((prevError) => ({ ...prevError, partnershipType: "Partnership type is required" }));
    }
  };

  return (
    <form action="" className="grid-2" onSubmit={handleSubmit}>
      <FormField
        placeholder="Organization Name*"
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
        placeholder="Phone Number*"
        name="phone"
        value={form.phone}
        onChange={handleChange}
        errorMessage={error.phone}
      />
      <div className="newSelectSection">
        <label htmlFor="typeOfPartnership" className="form-label">
          Type of Partnership/Collaboration*
        </label>
        <Select
          menuPortalTarget={document.body}
          styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
          options={partnershipOptions}
          onChange={handleSelectChange}
          className="custom-select-dropdown"
          classNamePrefix={"custom-select-dropdown-inner"}
          id="typeOfPartnership"
          // isClearable
          // menuIsOpen={true}
        />
        {error.partnershipType && <p className="form-error">{error.partnershipType}</p>}
      </div>
      <FormField
        type="textarea"
        placeholder="Brief Description of Your Proposal*"
        name="proposal"
        value={form.proposal}
        onChange={handleChange}
        errorMessage={error.proposal}
        className="col-2"
      />
      <FormField
        placeholder="Website or Social Media Links"
        name="website"
        value={form.website}
        onChange={handleChange}
        className="col-2"
      />
      <p className="form-success col-2">{global}</p>

      <div className="form-btn">
        <button className="btn btn-secondary w-100">
          Submit Request
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