import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../Images/logo2.png";

const Header = () => {
  return (
    <>
      {/* ✅ CSS INSIDE COMPONENT */}
      <style>
        {`
          .link {
            color: black;
            text-decoration: none;
            font-weight: bold;
            padding: 10px;
          }

          .link:hover {
            color: #b56828;
          }

          .active-link {
            color: brown;
          }
        `}
      </style>

      <header className="bg-light py-3">
        <div className="container">
          <div className="row align-items-center">

            {/* Logo */}
            <div className="col-md-6 d-flex align-items-center">
              <img
                src={logo}
                alt="BORCELLE"
                style={{ width: "60px", height: "40px" }}
              />
              <h2 className="ms-3" style={{ color: "#b56828" }}>
                BORCELLE
              </h2>
            </div>

            {/* Links */}
            <div className="col-md-6">
              <nav className="d-flex justify-content-end gap-4">

                <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : "link"}>
                  Home
                </NavLink>

                <NavLink to="/login" className={({ isActive }) => isActive ? "active-link" : "link"}>
                  Login
                </NavLink>

                <NavLink to="/registr" className={({ isActive }) => isActive ? "active-link" : "link"}>
                  Registration
                </NavLink>
                <NavLink to="/Shop" className={({ isActive }) => isActive ? "active-link" : "link"}>
                  Shop now
                </NavLink>
                <NavLink to="/Courses" className={({ isActive }) => isActive ? "active-link" : "link"}>
                  Courses
                </NavLink>
                <NavLink to="/Contact" className={({ isActive }) => isActive ? "active-link" : "link"}>
                  Contact
                </NavLink>
                <NavLink to="/Admin" className={({ isActive }) => isActive ? "active-link" : "link"}>
                  Admin
                </NavLink>




              </nav>
            </div>

          </div>
        </div>
      </header>
    </>
  );
};

export default Header;