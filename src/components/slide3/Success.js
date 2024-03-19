import React from "react";
import { useState, useEffect } from "react";

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
    <div>
      <p>Congratulations your info is registerd</p>
      <p>FirstName: {formData.firstName}</p>
      <p>LastNameName: {formData.lastName}</p>
      <p>Email: {formData.email}</p>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
}
