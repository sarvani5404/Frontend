import React, { useState } from "react";

const SuppliersManagement = () => {
  const [suppliers, setSuppliers] = useState([
    { id: 1, name: "ABC Supplies", contact: "abc@supplies.com" },
  ]);
  const [form, setForm] = useState({ id: "", name: "", contact: "" });

  const handleAddSupplier = (e) => {
    e.preventDefault();
    if (form.name && form.contact) {
      setSuppliers([...suppliers, { ...form, id: Date.now() }]);
      setForm({ id: "", name: "", contact: "" });
    }
  };

  const handleDeleteSupplier = (id) => {
    setSuppliers(suppliers.filter((supplier) => supplier.id !== id));
  };

  return (
    <div>
      <h2>Manage Suppliers</h2>
      <form className="form" onSubmit={handleAddSupplier}>
        <input
          type="text"
          placeholder="Supplier Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Contact Info"
          value={form.contact}
          onChange={(e) => setForm({ ...form, contact: e.target.value })}
          required
        />
        <button type="submit">Add Supplier</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Contact Info</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map((supplier) => (
            <tr key={supplier.id}>
              <td>{supplier.id}</td>
              <td>{supplier.name}</td>
              <td>{supplier.contact}</td>
              <td>
                <button onClick={() => handleDeleteSupplier(supplier.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SuppliersManagement;
