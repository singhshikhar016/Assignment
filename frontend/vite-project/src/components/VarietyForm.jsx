import React, { useState } from "react";

const VarietyForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    crop: "",
    variety: "",
    yield: "",
    sowingDate: "",
    expectedHarvestDays: "",
    healthRating: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-md shadow-sm space-y-4">
      {["crop", "variety", "yield", "sowingDate", "expectedHarvestDays", "healthRating"].map((field) => (
        <div key={field}>
          <label className="block font-medium capitalize">{field.replace(/([A-Z])/g, ' $1')}</label>
          <input
            type={field.includes("Date") ? "date" : "text"}
            name={field}
            value={formData[field]}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
      ))}
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Submit
      </button>
    </form>
  );
};

export default VarietyForm;
