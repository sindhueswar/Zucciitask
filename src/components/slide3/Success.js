import React from "react";
import { useState, useEffect } from "react";
import"./Success.css"
export default function Success({ formData }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch("https://catfact.ninja/fact");
      const jsonData = await response.json();
      setData(jsonData.fact);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div className="Success">
      <p className="Message">Congratulations your info is registerd</p>
      <p>FirstName: {formData.firstName}</p>
      <p>LastNameName: {formData.lastName}</p>
      <p>Email: {formData.email}</p>
      <p>Here's a fact for you:</p>
      {data ? <pre className="Fact"><mark>{JSON.stringify(data, null, 2)}</mark></pre> : <p>Loading...</p>}
    </div>
  );
}
