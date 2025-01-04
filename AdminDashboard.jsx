import React, { useState } from "react";
import {
  Users,
  Package,
  Truck,
  BarChart2,
  Plus,
  Edit,
  Trash,
} from "lucide-react";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("users");

  const [users, setUsers] = useState([
    {
      id: 1,
      productName: "Router X1",
      category: "Networking",
      stockLevel: 150,
      action: "Pending",
    },
    {
      id: 2,
      productName: "Switch Y2",
      category: "Networking",
      stockLevel: 75,
      action: "Delivered",
    },
    {
      id: 3,
      productName: "Fiber Optic Cable",
      category: "Cabling",
      stockLevel: 500,
      action: "Pending",
    },
  ]);

  const [products, setProducts] = useState([
    {
      id: 1,
      productName: "Router X1",
      category: "Networking",
      stockLevel: 150,
      reorderPoint: 50,
      action: "Pending",
    },
    {
      id: 2,
      productName: "Switch Y2",
      category: "Networking",
      stockLevel: 75,
      reorderPoint: 50,
      action: "Delivered",
    },
    {
      id: 3,
      productName: "Fiber Optic Cable",
      category: "Cabling",
      stockLevel: 500,
      reorderPoint: 100,
      action: "Pending",
    },
  ]);

  const [suppliers, setSuppliers] = useState([
    {
      id: 1,
      name: "TechNet Solutions",
      contact: "Alice Brown",
      email: "alice@technet.com",
    },
    {
      id: 2,
      name: "Global Comm Supplies",
      contact: "Charlie Davis",
      email: "charlie@globalcomm.com",
    },
  ]);

  const [stocks, setStocks] = useState([
    {
      productId: 1,
      quantity: 150,
      type: "Inbound",
      description: "Restocked by supplier",
    },
    {
      productId: 2,
      quantity: 50,
      type: "Outbound",
      description: "Shipped to warehouse",
    },
    {
      productId: 3,
      quantity: 300,
      type: "Inbound",
      description: "Received new stock",
    },
  ]);

  const handleEditSupplier = (id) => {
    alert(`Edit functionality for supplier with ID: ${id}`);
  };

  const handleDeleteSupplier = (id) => {
    setSuppliers(suppliers.filter((supplier) => supplier.id !== id));
    alert(`Supplier with ID: ${id} has been deleted`);
  };

  const renderUsersTab = () => (
    <div>
      <h3 className="text-xl font-semibold mb-4">Manage Users</h3>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Category</th>
            <th>Stock Level</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.productName}</td>
              <td>{user.category}</td>
              <td>{user.stockLevel}</td>
              <td>{user.action}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="add-btn">
        <Plus size={16} className="mr-2" />
        Add User
      </button>
    </div>
  );

  const renderProductsTab = () => (
    <div>
      <h3 className="text-xl font-semibold mb-4">Manage Products</h3>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Category</th>
            <th>Stock Level</th>
            <th>Reorder Point</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.productName}</td>
              <td>{product.category}</td>
              <td>{product.stockLevel}</td>
              <td>{product.reorderPoint}</td>
              <td>{product.action}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="add-btn">
        <Plus size={16} className="mr-2" />
        Add Product
      </button>
    </div>
  );

  const renderSuppliersTab = () => (
    <div>
      <h3 className="text-xl font-semibold mb-4">Manage Suppliers</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact Person</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map((supplier) => (
            <tr key={supplier.id}>
              <td>{supplier.name}</td>
              <td>{supplier.contact}</td>
              <td>{supplier.email}</td>
              <td>
                <button
                  className="edit-btn"
                  onClick={() => handleEditSupplier(supplier.id)}
                >
                  <Edit size={16} />
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDeleteSupplier(supplier.id)}
                >
                  <Trash size={16} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="add-btn">
        <Plus size={16} className="mr-2" />
        Add Supplier
      </button>
    </div>
  );

  const renderStocksTab = () => (
    <div>
      <h3 className="text-xl font-semibold mb-4">Manage Stocks</h3>
      <table>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Quantity</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock, index) => (
            <tr key={index}>
              <td>{stock.productId}</td>
              <td>{stock.quantity}</td>
              <td>{stock.type}</td>
              <td>{stock.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="admin-dashboard">
      <style>{`
        .admin-dashboard {
          font-family: 'Arial', sans-serif;
          max-width: 1000px;
          margin: 20px auto;
          padding: 20px;
          background-color: #f7f7f7;
          border-radius: 12px;
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
        }

        h1, h3 {
          color: #2c3e50;
        }

        h1 {
          font-size: 28px;
          text-align: center;
          margin-bottom: 20px;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 20px;
          background-color: #ffffff;
          border-radius: 6px;
          overflow: hidden;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
        }

        table th, table td {
          text-align: left;
          padding: 12px;
        }

        table th {
          background-color: #007bff;
          color: #ffffff;
          font-weight: bold;
        }

        table tr:nth-child(even) {
          background-color: #f9f9f9;
        }

        table tr:hover {
          background-color: #eaf2f8;
        }

        button {
          display: inline-flex;
          align-items: center;
          background-color: #007bff;
          color: #ffffff;
          padding: 8px 12px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: background-color 0.3s ease-in-out;
        }

        button:hover {
          background-color: #0056b3;
        }

        .add-btn {
          margin-top: 10px;
          display: inline-flex;
          align-items: center;
          font-size: 14px;
        }

        .edit-btn {
          margin-right: 10px;
          background-color: #ffc107;
        }

        .edit-btn:hover {
          background-color: #e0a800;
        }

        .delete-btn {
          background-color: #dc3545;
        }

        .delete-btn:hover {
          background-color: #c82333;
        }

        .tab-buttons {
          margin-bottom: 20px;
          display: flex;
          justify-content: space-evenly;
        }

        .tab-buttons button {
          flex: 0 1 20%;
          margin: 0 5px;
        }
      `}</style>

      <h1>Admin Dashboard</h1>

      <div className="tab-buttons">
        <button
          className={activeTab === "users" ? "add-btn" : ""}
          onClick={() => setActiveTab("users")}
        >
          <Users className="mr-2" />
          Users
        </button>
        <button
          className={activeTab === "products" ? "add-btn" : ""}
          onClick={() => setActiveTab("products")}
        >
          <Package className="mr-2" />
          Products
        </button>
        <button
          className={activeTab === "suppliers" ? "add-btn" : ""}
          onClick={() => setActiveTab("suppliers")}
        >
          <Truck className="mr-2" />
          Suppliers
        </button>
        <button
          className={activeTab === "stock" ? "add-btn" : ""}
          onClick={() => setActiveTab("stock")}
        >
          <BarChart2 className="mr-2" />
          Stock
        </button>
      </div>

      <div>
        {activeTab === "users" && renderUsersTab()}
        {activeTab === "products" && renderProductsTab()}
        {activeTab === "suppliers" && renderSuppliersTab()}
        {activeTab === "stock" && renderStocksTab()}
      </div>
    </div>
  );
};

export default AdminDashboard;
