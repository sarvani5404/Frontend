// src/components/ProductTable.jsx

import React, { useEffect } from 'react';

function ProductTable({ products }) {
  useEffect(() => {
    // Apply any filtering logic here if required
  }, [products]);

  return (
    <div>
      <h3>Product List</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Stock Level</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.stockLevel}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
