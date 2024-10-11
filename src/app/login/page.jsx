"use client";

import { isLoggedIn } from "@/utils/auth";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (!isLoggedIn()) {
      // Redirect to login if not logged in
      router.push("/login");
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setError("");
    setSuccess("");

    try {
      // Make an Axios POST request to your login endpoint
      const response = await axios.post("/api/login", {
        email,
        password,
      });

      // Handle success response
      setSuccess("Login successful!"); // You can also redirect the user here
      // Store the token in localStorage or handle it as needed
      localStorage.setItem("token", response.data.token);
      router.push("/admin");
    } catch (err) {
      // Handle error response
      if (err.response && err.response.data.errors) {
        console.log(err.response.data); // Display validation errors
      } else {
        setError("Invalid email or password."); // Generic error message
      }
      console.error("Login error:", err);
    }
  };

  return (
    <div className="login">
      <div className="login-container">
        <h3>Login as Admin</h3>

        <form className="form" onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="user">Email or Username</label>
            <input
              type="text"
              id="user"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <span className="error">{error}</span>}
          <button type="submit" className="btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
