import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import { useNavigate } from "react-router-dom";

import axios from "axios";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [error, setError] =
    useState("");

  // ================= LOGIN ================= //

  const handleLogin = async (e) => {

    e.preventDefault();

    setError("");

    // VALIDATION

    if (!email || !password) {

      setError(
        "Please fill all fields"
      );

      return;
    }

    if (!email.includes("@")) {

      setError(
        "Invalid email format"
      );

      return;
    }

    try {

      const response =
        await axios.post(
          "https://brocellef.onrender.com/login",
          {
            email,
            password,
          }
        );

      const user =
        response.data.user;

      // SAVE USER

      localStorage.setItem(
        "user",
        JSON.stringify(user)
      );

      // ROLE CHECK

      if (
        user.role === "admin"
      ) {

        navigate("/admin");

      } else {

        navigate("/");

      }

    } catch (error) {

      setError(
        error.response?.data
          ?.message ||
          "Login failed"
      );

    }
  };

  return (

    <div className="d-flex vh-100">

      {/* IMAGE */}

      <div className="w-50">

        <img
          src="https://images.pexels.com/photos/7814780/pexels-photo-7814780.jpeg"
          className="img-fluid h-100"
          style={{
            objectFit: "cover",
          }}
          alt="login"
        />

      </div>

      {/* CENTER TEXT */}

      <div
        className="d-flex flex-column align-items-center justify-content-center text-center w-25"
      >

        <h1
          style={{
            color: "#b56828",
            fontSize: "3rem",
            fontWeight: "bold",
          }}
        >
          Welcome Back!
        </h1>

        <p style={{ color: "#705531" }}>
          Feel Nature With BORCELLE
        </p>

      </div>

      {/* LOGIN FORM */}

      <div className="w-50 d-flex align-items-center justify-content-center">

        <div
          className="card p-4"
          style={{
            width: "80%",
            borderRadius: "20px",
            backgroundColor: "#e4dace",
          }}
        >

          <h3 className="text-center mb-4">
            Login
          </h3>

          {/* ERROR MESSAGE */}

          {error && (

            <div className="alert alert-danger">

              {error}

            </div>

          )}

          <form onSubmit={handleLogin}>

            {/* EMAIL */}

            <input
              className="form-control mb-3"
              placeholder="Email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />

            {/* PASSWORD */}

            <input
              type="password"
              className="form-control mb-3"
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />

            {/* LOGIN BUTTON */}

            <button
              type="submit"
              className="btn w-100 mb-3"
              style={{
                backgroundColor: "#b56828",
                color: "white",
              }}
            >
              Login
            </button>

            {/* REGISTER BUTTON */}

            <button
              type="button"
              className="btn w-100"
              style={{
                backgroundColor: "#705531",
                color: "white",
              }}
              onClick={() =>
                navigate("/registr")
              }
            >
              Sign Up
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Login;
