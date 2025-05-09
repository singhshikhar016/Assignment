import React, { useEffect, useState } from "react";
import VarietyCard from "../components/VarietyCard.jsx";

const Dashboard = () => {
  const [varieties, setVarieties] = useState([]);

  const fetchVarieties = async () => {
    const res = await fetch("http://localhost:3000/api/varieties");
    const data = await res.json();
    setVarieties(data);
  };

  const deleteVariety = async (id) => {
    await fetch(`http://localhost:3000/api/varieties/${id}`, { method: "DELETE" });
    fetchVarieties();
  };

  useEffect(() => {
    fetchVarieties();
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Crop Variety Dashboard</h1>
      <div>
        {varieties.map((variety) => (
          <VarietyCard key={variety.id} variety={variety} onDelete={deleteVariety} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
