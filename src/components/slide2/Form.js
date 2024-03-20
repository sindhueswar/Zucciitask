import React, { useState } from "react";
import "./Form.css";
export default function Form({ updateFormData }) {
  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateFormData(formData);
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
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          className="LastName"
          onChange={handleInputChange}
        />
      </div>
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="Email"
        onChange={handleInputChange}
      />
      <button type="submit" className="submit">Submit</button>
    </form>
  );
}
