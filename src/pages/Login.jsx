import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ admin_name: "", admin_password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post(
        "https://toptaj.net/api/login.php",
        formData
      );

      console.log(response.data);
      if (response.data.status === "ok") {
        // Group the admin data into one object
        const adminData = {
          admin_id: response.data.admin_id,
          admin_name: response.data.admin_name,
          admin_role: response.data.admin_role,
        };
        // Store the object in localStorage
        localStorage.setItem("adminData", JSON.stringify(adminData));
        navigate("/dashboard"); // Redirect to the dashboard on success
      } else {
        setError(response.data.message || "Login failed");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
      console.error(err);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-xl font-bold mb-4">Admin Login</h2>

        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Admin Name</label>
          <input
            type="text"
            name="admin_name"
            value={formData.admin_name}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Password</label>
          <input
            type="password"
            name="admin_password"
            value={formData.admin_password}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
