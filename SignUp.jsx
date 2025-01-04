import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password || !formData.role) {
      setError("All fields are required");
      return;
    }

    // Simulate successful signup
    alert("User registered successfully!");
    navigate("/");
  };

  return (
    <div className="signup-container">
      <style>{`
        .signup-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #f7f9fc;
        }

        .signup-box {
          background: #fff;
          padding: 20px 30px;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          width: 300px;
          text-align: center;
        }

        .signup-box h2 {
          margin-bottom: 20px;
        }

        .signup-box input, .signup-box select, .signup-box button {
          width: 100%;
          padding: 10px;
          margin: 10px 0;
          border: 1px solid #ccc;
          border-radius: 5px;
        }

        .signup-box button {
          background-color: #28a745;
          color: white;
          border: none;
          cursor: pointer;
        }

        .signup-box button:hover {
          background-color: #218838;
        }

        .signup-box p span {
          color: #007bff;
          cursor: pointer;
          text-decoration: underline;
        }
      `}</style>
      <div className="signup-box">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <select name="role" value={formData.role} onChange={handleChange}>
            <option value="">Select Role</option>
            <option value="User">User</option>
            <option value="Admin">Admin</option>
            <option value="Manager">Manager</option>
            <option value="Staff">Staff</option>
          </select>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <button type="submit">Sign Up</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <p>
          Already have an account?{" "}
          <span
            onClick={() => navigate("/")}
            style={{ color: "blue", cursor: "pointer" }}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
