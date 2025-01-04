import React, { useState } from "react";

const ProductsManagement = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    id: "",
    name: "",
    category: "",
    stock: 0,
  });

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (form.name && form.category) {
      setProducts([...products, { ...form, id: Date.now() }]);
      setForm({ id: "", name: "", category: "", stock: 0 });
    }
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div>
      <h2>Manage Products</h2>
      <form className="form" onSubmit={handleAddProduct}>
        <input
          type="text"
          placeholder="Product Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Category"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Stock"
          value={form.stock}
          onChange={(e) => setForm({ ...form, stock: e.target.value })}
          required
        />
        <button type="submit">Add Product</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.stock}</td>
              <td>
                <button onClick={() => handleDeleteProduct(product.id)}>
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

export default ProductsManagement;
