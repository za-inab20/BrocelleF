import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profileURL, setProfileURL] = useState("");

  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const [errors, setErrors] = useState({});
  const [role, setRole] = useState("user");

  const [error, setError] = useState("");
  const validateForm = () => {
    let newErrors = {};

  
    if (!name.trim()) {
      newErrors.name = "Name is required";
    } else if (name.length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Invalid email format";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

  
    if (!profileURL.trim()) {
      newErrors.profileURL = "Profile image URL is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    setError("");

    

    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill all fields");

      return;
    }

    if (!email.includes("@")) {
      setError("Invalid email format");

      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");

      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");

      return;
    }

    try {
      await axios.post("https://brocellef.onrender.com/register", {
        uname: name,
        email,
        password,
        pic: profileURL,
        role,
      });

      alert("Registration successful");

      navigate("/login");
    } catch (error) {
      setError(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="d-flex vh-100">
      <div className="w-50">
        <img
          src="https://images.pexels.com/photos/7814780/pexels-photo-7814780.jpeg"
          className="img-fluid h-100"
          style={{ objectFit: "cover" }}
          alt="register"
        />
      </div>

      <div className="d-flex flex-column align-items-center justify-content-center text-center w-25">
        <h1
          style={{
            color: "#b56828",
            fontSize: "3rem",
            fontWeight: "bold",
          }}
        >
          Register Now!
        </h1>

        <p style={{ color: "#705531" }}>Feel Nature With BROCELLE</p>
      </div>

      <div className="w-50 d-flex align-items-center justify-content-center">
        <div
          className="card p-4"
          style={{
            width: "80%",
            borderRadius: "20px",
            backgroundColor: "#e4dace",
          }}
        >
          <h3 className="text-center mb-4">Sign Up</h3>

          {message && (
            <div
              className={isError ? "alert alert-danger" : "alert alert-success"}
            >
              {message}
            </div>
          )}
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleRegister}>
            <input
              className="form-control"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            {errors.name && (
              <small className="text-danger">{errors.name}</small>
            )}

       
            <input
              className="form-control mt-3"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {errors.email && (
              <small className="text-danger">{errors.email}</small>
            )}

           
            <input
              type="password"
              className="form-control mt-3"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {errors.password && (
              <small className="text-danger">{errors.password}</small>
            )}

            <input
              type="password"
              className="form-control mt-3"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            {errors.confirmPassword && (
              <small className="text-danger">{errors.confirmPassword}</small>
            )}

     
            <input
              className="form-control mt-3"
              placeholder="Profile URL"
              value={profileURL}
              onChange={(e) => setProfileURL(e.target.value)}
            />

            {errors.profileURL && (
              <small className="text-danger">{errors.profileURL}</small>
            )}
            <select
              className="form-control mb-3"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="user">Normal User</option>

              <option value="admin">Admin</option>
            </select>

            <button
              className="btn w-100 mt-4"
              style={{
                backgroundColor: "#b56828",
                color: "white",
              }}
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
