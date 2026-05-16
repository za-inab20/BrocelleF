import "bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Header from "./Components/Header";
import Shop from "./Components/Shop";
import Courses from "./Components/Courses";
import Contact from "./Components/Contact";
import Admin from "./Components/Admin";

function App() {

  return (

    <div
      style={{
        backgroundColor: "#e0c6a9",
        minHeight: "100vh",
      }}
    >

      <Header />

      <div style={{ padding: "20px" }}>

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/registr"
            element={<Register />}
          />

          <Route
            path="/Shop"
            element={<Shop />}
          />

          <Route
            path="/courses"
            element={<Courses />}
          />

          <Route
            path="/Contact"
            element={<Contact />}
          />

          <Route
            path="/Admin"
            element={<Admin />}
          />

        </Routes>

      </div>

      {/* Footer */}

      <div className="row">

        <div
          style={{
            backgroundColor: "#e0c6a9",
            textAlign: "center",
            bottom: 0,
            position: "relative",
          }}
          className="display-10"
        >

          BORCELLE@Company 2025

        </div>

      </div>

    </div>
  );
}

export default App;