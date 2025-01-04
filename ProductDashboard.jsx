import React, { useState } from "react";

const ProductDashboard = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Router", category: "Networking", stockLevel: 200, reorderPoint: 150, action: "Delivered" },
    { id: 2, name: "Switch", category: "Networking", stockLevel: 80, reorderPoint: 100, action: "Pending" },
    { id: 3, name: "Cable", category: "Accessories", stockLevel: 300, reorderPoint: 100, action: "Pending" },
  ]);
  const [newProduct, setNewProduct] = useState({ name: "", category: "", stockLevel: "", reorderPoint: "", action: "" });
  const [filterCategory, setFilterCategory] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = {
    Networking: ["Router", "Switch", "Modem"],
    Accessories: ["Cable", "Adapter", "Connector"],
    Storage: ["Hard Drive", "Flash Drive", "SSD"],
  };

  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.category || !newProduct.stockLevel || !newProduct.reorderPoint) {
      alert("Please fill out all mandatory fields.");
      return;
    }
    setProducts([...products, { ...newProduct, id: products.length + 1 }]);
    setNewProduct({ name: "", category: "", stockLevel: "", reorderPoint: "", action: "" });
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleMarkAsDelivered = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id ? { ...product, action: "Delivered" } : product
      )
    );
  };

  const filteredProducts = filterCategory
    ? products.filter((product) => product.category === filterCategory)
    : products;

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setNewProduct({ ...newProduct, category, name: "" });
  };

  const handleProductChange = (product) => {
    setNewProduct({ ...newProduct, name: product });
  };

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #e0f7fa, #e0e0e0)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "15px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          padding: "20px",
          width: "90%",
          maxWidth: "1200px",
        }}
      >
        <h1 style={{ textAlign: "center", color: "#007BFF", marginBottom: "20px" }}>User Dashboard</h1>
        <div style={{ marginBottom: "20px" }}>
          <input
            type="text"
            placeholder="Filter by Category"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            style={{
              padding: "10px",
              marginRight: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
            }}
          />
        </div>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            backgroundColor: "#fdfdfd",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#007BFF", color: "white", textAlign: "left" }}>
              <th style={{ padding: "10px 15px" ,color:'black',fontWeight:'bold'}}>Name</th>
              <th style={{ padding: "10px 15px",color:'black',fontWeight:'bold' }}>Category</th>
              <th style={{ padding: "10px 15px" ,color:'black',fontWeight:'bold'}}>Stock Level</th>
              <th style={{ padding: "10px 15px",color:'black',fontWeight:'bold' }}>Reorder Point</th>
              <th style={{ padding: "10px 15px" ,color:'black',fontWeight:'bold'}}>Action</th>
              <th style={{ padding: "10px 15px" ,color:'black',fontWeight:'bold'}}>Options</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id} style={{ borderBottom: "1px solid #ddd" }}>
                <td style={{ padding: "10px 15px", color: "black", fontWeight: "bold" }}>{product.name}</td>
                <td style={{ padding: "10px 15px", color: "black", fontWeight: "bold" }}>{product.category}</td>
                <td style={{ padding: "10px 15px" }}>{product.stockLevel}</td>
                <td style={{ padding: "10px 15px" }}>{product.reorderPoint}</td>
                <td style={{ padding: "10px 15px" }}>
                  {product.action}
                  {product.action === "Pending" && (
                    <button
                      onClick={() => handleMarkAsDelivered(product.id)}
                      style={{
                        marginLeft: "10px",
                        backgroundColor: "#28A745",
                        color: "#fff",
                        border: "none",
                        borderRadius: "5px",
                        padding: "5px 10px",
                        cursor: "pointer",
                      }}
                    >
                      Mark as Delivered
                    </button>
                  )}
                </td>
                <td style={{ padding: "10px 15px" }}>
                  <button
                    onClick={() => handleDeleteProduct(product.id)}
                    style={{
                      backgroundColor: "#DC3545",
                      color: "#fff",
                      border: "none",
                      borderRadius: "5px",
                      padding: "5px 10px",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ marginTop: "20px" }}>
          <h2>Add New Product</h2>
          <select
            value={newProduct.category}
            onChange={(e) => handleCategoryChange(e.target.value)}
            style={{
              padding: "10px",
              marginRight: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
            }}
          >
            <option value="">Select Category</option>
            {Object.keys(categories).map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <select
            value={newProduct.name}
            onChange={(e) => handleProductChange(e.target.value)}
            style={{
              padding: "10px",
              marginRight: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
            }}
            disabled={!selectedCategory}
          >
            <option value="">Select Product</option>
            {categories[selectedCategory]?.map((product) => (
              <option key={product} value={product}>
                {product}
              </option>
            ))}
          </select>
          <input
            type="number"
            placeholder="Stock Level"
            value={newProduct.stockLevel}
            onChange={(e) => setNewProduct({ ...newProduct, stockLevel: e.target.value })}
            style={{
              padding: "10px",
              marginRight: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
            }}
          />
          <input
            type="number"
            placeholder="Reorder Point"
            value={newProduct.reorderPoint}
            onChange={(e) => setNewProduct({ ...newProduct, reorderPoint: e.target.value })}
            style={{
              padding: "10px",
              marginRight: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
            }}
          />
          <button
            onClick={handleAddProduct}
            style={{
              backgroundColor: "#28A745",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              padding: "10px 15px",
              cursor: "pointer",
            }}
          >
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDashboard;

// import React, { useState } from "react";

// const ProductDashboard = () => {
//   const [products, setProducts] = useState([
//     { id: 1, name: "Router", category: "Networking", stockLevel: 200, reorderPoint: 150, action: "Delivered" },
//     { id: 2, name: "Switch", category: "Networking", stockLevel: 80, reorderPoint: 100, action: "Pending" },
//     { id: 3, name: "Cable", category: "Accessories", stockLevel: 300, reorderPoint: 100, action: "On Process" },
//   ]);
//   const [newProduct, setNewProduct] = useState({ name: "", category: "", stockLevel: "", reorderPoint: "", action: "" });
//   const [filterCategory, setFilterCategory] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("");

//   const categories = {
//     Networking: ["Router", "Switch", "Modem"],
//     Accessories: ["Cable", "Adapter", "Connector"],
//     Storage: ["Hard Drive", "Flash Drive", "SSD"],
//   };

//   const handleAddProduct = () => {
//     if (!newProduct.name || !newProduct.category || !newProduct.stockLevel || !newProduct.reorderPoint) {
//       alert("Please fill out all mandatory fields.");
//       return;
//     }
//     setProducts([...products, { ...newProduct, id: products.length + 1 }]);
//     setNewProduct({ name: "", category: "", stockLevel: "", reorderPoint: "", action: "" });
//   };

//   const handleEditProduct = (id) => {
//     const updatedProducts = products.map((product) =>
//       product.id === id ? { ...product, ...newProduct } : product
//     );
//     setProducts(updatedProducts);
//   };

//   const handleDeleteProduct = (id) => {
//     setProducts(products.filter((product) => product.id !== id));
//   };

//   const filteredProducts = filterCategory
//     ? products.filter((product) => product.category === filterCategory)
//     : products;

//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category);
//     setNewProduct({ ...newProduct, category, name: "" });
//   };

//   const handleProductChange = (product) => {
//     setNewProduct({ ...newProduct, name: product });
//   };

//   return (
//     <div
//       style={{
//         background: "linear-gradient(135deg, #e0f7fa, #e0e0e0)",
//         minHeight: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         padding: "20px",
//       }}
//     >
//       <div
//         style={{
//           backgroundColor: "#ffffff",
//           borderRadius: "15px",
//           boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
//           padding: "20px",
//           width: "90%",
//           maxWidth: "1200px",
//         }}
//       >
//         <h1 style={{ textAlign: "center", color: "#007BFF", marginBottom: "20px" }}>Product Dashboard</h1>
//         <div style={{ marginBottom: "20px" }}>
//           <input
//             type="text"
//             placeholder="Filter by Category"
//             value={filterCategory}
//             onChange={(e) => setFilterCategory(e.target.value)}
//             style={{
//               padding: "10px",
//               marginRight: "10px",
//               border: "1px solid #ddd",
//               borderRadius: "5px",
//             }}
//           />
//         </div>
//         <table
//           style={{
//             width: "100%",
//             borderCollapse: "collapse",
//             backgroundColor: "#fdfdfd",
//             borderRadius: "10px",
//             overflow: "hidden",
//           }}
//         >
//           <thead>
//             <tr style={{ backgroundColor: "#007BFF", color: "white", textAlign: "left" }}>
//               <th style={{ padding: "10px 15px" }}>Name</th>
//               <th style={{ padding: "10px 15px" }}>Category</th>
//               <th style={{ padding: "10px 15px" }}>Stock Level</th>
//               <th style={{ padding: "10px 15px" }}>Reorder Point</th>
//               <th style={{ padding: "10px 15px" }}>Action</th>
//               <th style={{ padding: "10px 15px" }}>Options</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredProducts.map((product) => (
//               <tr key={product.id} style={{ borderBottom: "1px solid #ddd" }}>
//                 <td style={{ padding: "10px 15px", color: "black", fontWeight: "bold" }}>{product.name}</td>
//                 <td style={{ padding: "10px 15px", color: "black", fontWeight: "bold" }}>{product.category}</td>
//                 <td style={{ padding: "10px 15px" }}>{product.stockLevel}</td>
//                 <td style={{ padding: "10px 15px" }}>{product.reorderPoint}</td>
//                 <td style={{ padding: "10px 15px" }}>{product.action}</td>
//                 <td style={{ padding: "10px 15px" }}>
//                   <button
//                     onClick={() => handleEditProduct(product.id)}
//                     style={{
//                       backgroundColor: "#007BFF",
//                       color: "#fff",
//                       border: "none",
//                       borderRadius: "5px",
//                       padding: "5px 10px",
//                       cursor: "pointer",
//                       marginRight: "5px",
//                     }}
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => handleDeleteProduct(product.id)}
//                     style={{
//                       backgroundColor: "#DC3545",
//                       color: "#fff",
//                       border: "none",
//                       borderRadius: "5px",
//                       padding: "5px 10px",
//                       cursor: "pointer",
//                     }}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <div style={{ marginTop: "20px" }}>
//           <h2>Add New Product</h2>
//           <select
//             value={newProduct.category}
//             onChange={(e) => handleCategoryChange(e.target.value)}
//             style={{
//               padding: "10px",
//               marginRight: "10px",
//               border: "1px solid #ddd",
//               borderRadius: "5px",
//             }}
//           >
//             <option value="">Select Category</option>
//             {Object.keys(categories).map((category) => (
//               <option key={category} value={category}>
//                 {category}
//               </option>
//             ))}
//           </select>
//           <select
//             value={newProduct.name}
//             onChange={(e) => handleProductChange(e.target.value)}
//             style={{
//               padding: "10px",
//               marginRight: "10px",
//               border: "1px solid #ddd",
//               borderRadius: "5px",
//             }}
//             disabled={!selectedCategory}
//           >
//             <option value="">Select Product</option>
//             {categories[selectedCategory]?.map((product) => (
//               <option key={product} value={product}>
//                 {product}
//               </option>
//             ))}
//           </select>
//           <input
//             type="number"
//             placeholder="Stock Level"
//             value={newProduct.stockLevel}
//             onChange={(e) => setNewProduct({ ...newProduct, stockLevel: e.target.value })}
//             style={{
//               padding: "10px",
//               marginRight: "10px",
//               border: "1px solid #ddd",
//               borderRadius: "5px",
//             }}
//           />
//           <input
//             type="number"
//             placeholder="Reorder Point"
//             value={newProduct.reorderPoint}
//             onChange={(e) => setNewProduct({ ...newProduct, reorderPoint: e.target.value })}
//             style={{
//               padding: "10px",
//               marginRight: "10px",
//               border: "1px solid #ddd",
//               borderRadius: "5px",
//             }}
//           />
//           <button
//             onClick={handleAddProduct}
//             style={{
//               backgroundColor: "#28A745",
//               color: "#fff",
//               border: "none",
//               borderRadius: "5px",
//               padding: "10px 15px",
//               cursor: "pointer",
//             }}
//           >
//             Add Product
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDashboard;

// import React, { useState } from "react";

// const ProductDashboard = () => {
//   const [products, setProducts] = useState([
//     {
//       id: 1,
//       name: "Cisco ISR 1101",
//       category: "Router",
//       stockLevel: 500,
//       reorderPoint: 150,
//       status: "Delivered",
//     },
//     {
//       id: 2,
//       name: "HP 5406zl",
//       category: "Switch",
//       stockLevel: 300,
//       reorderPoint: 100,
//       status: "Pending",
//     },
//   ]);

//   const [newProduct, setNewProduct] = useState({
//     name: "",
//     category: "",
//     stockLevel: 0,
//     reorderPoint: 100,
//     status: "Pending",
//   });

//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const handleAddProduct = () => {
//     setProducts([...products, { ...newProduct, id: products.length + 1 }]);
//     setNewProduct({ name: "", category: "", stockLevel: 0, reorderPoint: 100, status: "Pending" });
//   };

//   const handleDeleteProduct = (id) => {
//     setProducts(products.filter((product) => product.id !== id));
//   };

//   const handleEditProduct = (id, updatedProduct) => {
//     setProducts(
//       products.map((product) => (product.id === id ? { ...product, ...updatedProduct } : product))
//     );
//   };

//   const filteredProducts =
//     selectedCategory === "All"
//       ? products
//       : products.filter((product) => product.category === selectedCategory);

//   return (
//     <div style={{ fontFamily: "Arial", textAlign: "center", color: "#00274D" }}>
//       <h1 style={{ color: "#0056B3" }}>Product Dashboard</h1>

//       {/* Category Filter */}
//       <label style={{ fontWeight: "bold" }}>Filter by Category: </label>
//       <select
//         style={{ margin: "10px", padding: "5px" }}
//         value={selectedCategory}
//         onChange={(e) => setSelectedCategory(e.target.value)}
//       >
//         <option value="All">All</option>
//         {[...new Set(products.map((product) => product.category))].map((category) => (
//           <option key={category} value={category}>
//             {category}
//           </option>
//         ))}
//       </select>

//       {/* Product Table */}
//       <table
//         style={{
//           width: "80%",
//           margin: "20px auto",
//           borderCollapse: "collapse",
//           border: "1px solid #0056B3",
//         }}
//       >
//         <thead>
//           <tr style={{ background: "#0056B3", color: "#fff" }}>
//             <th style={{ border: "1px solid #0056B3", padding: "10px",color: 'black', fontWeight: 'bold' }}>Name</th>
//             <th style={{ border: "1px solid #0056B3", padding: "10px",color: 'black', fontWeight: 'bold' }}>Category</th>
//             <th style={{ border: "1px solid #0056B3", padding: "10px" ,color: 'black', fontWeight: 'bold'}}>Stock Level</th>
//             <th style={{ border: "1px solid #0056B3", padding: "10px" ,color: 'black', fontWeight: 'bold'}}>Reorder Point</th>
//             <th style={{ border: "1px solid #0056B3", padding: "10px" ,color: 'black', fontWeight: 'bold'}}>Status</th>
//             <th style={{ border: "1px solid #0056B3", padding: "10px",color: 'black', fontWeight: 'bold' }}>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredProducts.map((product) => (
//             <tr key={product.id} style={{ background: "#f9f9f9" }}>
//               <td style={{ border: "1px solid #0056B3", padding: "10px" }}>{product.name}</td>
//               <td style={{ border: "1px solid #0056B3", padding: "10px" }}>{product.category}</td>
//               <td style={{ border: "1px solid #0056B3", padding: "10px" }}>{product.stockLevel}</td>
//               <td style={{ border: "1px solid #0056B3", padding: "10px" }}>{product.reorderPoint}</td>
//               <td style={{ border: "1px solid #0056B3", padding: "10px" }}>{product.status}</td>
//               <td style={{ border: "1px solid #0056B3", padding: "10px" }}>
//                 <button
//                   style={{ margin: "5px", padding: "5px", background: "#0056B3", color: "#fff", border: "none" }}
//                   onClick={() => handleEditProduct(product.id, { status: "Delivered" })}
//                 >
//                   Mark Delivered
//                 </button>
//                 <button
//                   style={{ margin: "5px", padding: "5px", background: "#ff6666", color: "#fff", border: "none" }}
//                   onClick={() => handleDeleteProduct(product.id)}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Add Product */}
//       <h3 style={{ color: "#0056B3" }}>Add Product</h3>
//       <input
//         style={{ margin: "5px", padding: "5px" }}
//         type="text"
//         placeholder="Name"
//         value={newProduct.name}
//         onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
//       />
//       <input
//         style={{ margin: "5px", padding: "5px" }}
//         type="text"
//         placeholder="Category"
//         value={newProduct.category}
//         onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
//       />
//       <input
//         style={{ margin: "5px", padding: "5px" }}
//         type="number"
//         placeholder="Stock Level"
//         value={newProduct.stockLevel}
//         onChange={(e) => setNewProduct({ ...newProduct, stockLevel: parseInt(e.target.value, 10) })}
//       />
//       <input
//         style={{ margin: "5px", padding: "5px" }}
//         type="number"
//         placeholder="Reorder Point"
//         value={newProduct.reorderPoint}
//         onChange={(e) => setNewProduct({ ...newProduct, reorderPoint: parseInt(e.target.value, 10) })}
//       />
//       <button
//         style={{ margin: "10px", padding: "10px", background: "#0056B3", color: "#fff", border: "none" }}
//         onClick={handleAddProduct}
//       >
//         Add Product
//       </button>
//     </div>
//   );
// };

// export default ProductDashboard;

  

  
// // src/components/ProductDashboard.jsx

// import React, { useState, useEffect } from 'react';
// import ProductTable from './ProductTable';
// import ProductForm from './ProductForm';
// import Filters from './Filters';

// function ProductDashboard() {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [filters, setFilters] = useState({
//     name: '',
//     category: '',
//     stockLevel: '',
//     stockStatus: 'all',
//   });

//   useEffect(() => {
//     // Apply filters to products here
//   }, [filters, products]);

//   return (
//     <div>
//       <h1>Telecom Inventory Dashboard</h1>
//       <Filters filters={filters} setFilters={setFilters} />
//       <ProductForm products={products} setProducts={setProducts} />
//       <ProductTable products={filteredProducts} />
//     </div>
//   );
// }

// export default ProductDashboard;
