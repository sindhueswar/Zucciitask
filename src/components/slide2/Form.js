import React, { useState } from "react";
import "./Form.css";

export default function Form({ updateFormData, onNext }) {
  const [formData, setFormData] = useState({});
  const [validFields, setValidFields] = useState({
    firstName: false,
    lastName: false,
    email: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Perform validation on input change
    validateInput(name, value);
  };

  const validateInput = (name, value) => {
    let isValid = true;

    // Validate length and special characters
    if (value.length > 35 || /[^a-zA-Z]/.test(value)) {
      isValid = false;
    }

    // Email validation
    if (name === "email") {
      isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }

    setValidFields({ ...validFields, [name]: isValid });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are valid
    const allFieldsValid = Object.values(validFields).every(
      (isValid) => isValid
    );

    if (allFieldsValid) {
      updateFormData(formData);
      onNext();
    } else {
      alert("Please fill all fields correctly.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="Step2">
      <div className="Names">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          className="FirstName"
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          className="LastName"
          onChange={handleInputChange}
          required
        />
      </div>
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="Email"
        onChange={handleInputChange}
        required
      />

      <div className="NextformContent">
        <button
          type="submit"
          className="nextButton"
          disabled={
            !validFields.firstName ||
            !validFields.lastName ||
            !validFields.email
          }
        >
          Next
        </button>
      </div>
    </form>
  );
}
