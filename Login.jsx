import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate validation without a backend
    if (!credentials.email || !credentials.password) {
      setError("All fields are required");
      return;
    }

    // Simulated navigation logic
    if (
      credentials.email === "admin@gmail.com" &&
      credentials.password === "admin"
    ) {
      navigate("/admin");
    } else if (
      credentials.email === "manager@gmail.com" &&
      credentials.password === "manager"
    ) {
      navigate("/manager");
    } else if (
      credentials.email === "staff@gmail.com" &&
      credentials.password === "staff"
    ) {
      navigate("/staff");
    } else if (
      credentials.email === "user@gmail.com" &&
      credentials.password === "user"
    ) {
      navigate("/user");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <style>{`
        .login-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #f7f9fc;
        }

        .login-box {
          background: #fff;
          padding: 20px 30px;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          width: 300px;
          text-align: center;
        }

        .login-box h2 {
          margin-bottom: 20px;
        }

        .login-box input, .login-box button {
          width: 100%;
          padding: 10px;
          margin: 10px 0;
          border: 1px solid #ccc;
          border-radius: 5px;
        }

        .login-box button {
          background-color: #007bff;
          color: white;
          border: none;
          cursor: pointer;
        }

        .login-box button:hover {
          background-color: #0056b3;
        }

        .login-box p span {
          color: #007bff;
          cursor: pointer;
          text-decoration: underline;
        }
      `}</style>
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <button type="submit">Login</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <p>
          Don’t have an account?{" "}
          <span onClick={() => navigate("/signup")}>Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
