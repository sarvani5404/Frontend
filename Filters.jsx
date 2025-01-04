// src/components/Filters.jsx

import React from 'react';

function Filters({ filters, setFilters }) {
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h3>Filters</h3>
      <input
        type="text"
        name="name"
        placeholder="Search by name"
        value={filters.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="category"
        placeholder="Search by category"
        value={filters.category}
        onChange={handleChange}
      />
      <input
        type="number"
        name="stockLevel"
        placeholder="Search by stock level"
        value={filters.stockLevel}
        onChange={handleChange}
      />
      <select
        name="stockStatus"
        value={filters.stockStatus}
        onChange={handleChange}
      >
        <option value="all">All Stock Status</option>
        <option value="low">Low Stock</option>
        <option value="out">Out of Stock</option>
      </select>
    </div>
  );
}

export default Filters;
