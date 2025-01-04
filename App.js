import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import AdminDashboard from "./components/AdminDashboard";
import ManagerDashboard from "./components/ManagerDashboard";
import Staffpage from "./components/Staffpage";
import UserDashboard from "./components/UserDashboard";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/manager" element={<ManagerDashboard />} />
          <Route path="/staff" element={<Staffpage />} />
          <Route path="/user" element={<UserDashboard />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
