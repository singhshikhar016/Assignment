import React from "react";

function Filter({ filters, onChange }) {
  return (
    <div className="flex gap-2 mb-4">
      <input
        placeholder="Search by crop or variety"
        value={filters.search}
        onChange={(e) => onChange({ ...filters, search: e.target.value })}
      />
      <select
        value={filters.healthRating}
        onChange={(e) => onChange({ ...filters, healthRating: e.target.value })}
      >
        <option value="">All Ratings</option>
        {[1,2,3,4,5].map(r => (
          <option key={r} value={r}>{r} stars</option>
        ))}
      </select>
    </div>
  );
}

export default Filter;
