

import React from 'react';

const ProductForm = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      name: e.target.name.value,
      category: e.target.category.value,
      stockLevel: parseInt(e.target.stockLevel.value, 10),
      action: 'Pending',
      reorderPoint: parseInt(e.target.reorderPoint.value, 10),
    };
    onSubmit(newProduct);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name: </label>
        <input type="text" name="name" required />
      </div>
      <div>
        <label>Category: </label>
        <input type="text" name="category" required />
      </div>
      <div>
        <label>Stock Level: </label>
        <input type="number" name="stockLevel" required />
      </div>
      <div>
        <label>Reorder Point: </label>
        <input type="number" name="reorderPoint" required />
      </div>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;


// import React, { useState } from 'react';

// function ProductForm() {
//   const [form, setForm] = useState({
//     name: '',
//     category: '',
//     stockLevel: 0,  // Add more fields as needed
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // form submission logic
//   };

//   return (
//     <form style={{ padding: '20px', border: '1px solid #ddd' }} onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="name"
//         placeholder="Product Name"
//         value={form.name}
//         onChange={handleChange}
//       />
//       <input
//         type="text"
//         name="category"
//         placeholder="Product Category"
//         value={form.category}
//         onChange={handleChange}
//       />
//       <input
//         type="number"
//         name="stockLevel"
//         placeholder="Stock Level"
//         value={form.stockLevel}
//         onChange={handleChange}
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default ProductForm;
