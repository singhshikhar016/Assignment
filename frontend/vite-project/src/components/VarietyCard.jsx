import React from "react";

const VarietyCard = ({ variety, onDelete }) => {
  return (
    <div className="border p-4 mb-4 rounded-md shadow-sm bg-white hover:shadow-md transition">
      <h2 className="text-lg font-semibold text-green-700">{variety.variety}</h2>
      <p><strong>Crop:</strong> {variety.crop}</p>
      <p><strong>Expected Yield:</strong> {variety.yield} kg</p>
      <p><strong>Harvest Date:</strong> {variety.harvestDate}</p>
      <p><strong>Health Rating:</strong> {variety.healthRating}/10</p>
      <button
        onClick={() => onDelete(variety.id)}
        className="mt-3 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  );
};

export default VarietyCard;
