import React, { useState } from "react";
import axios from "axios";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    lat: "",
    lon: "",
  });

 
  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setFormData((prevData) => ({
            ...prevData,
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          }));

          alert("Location added successfully!");
        },

        (error) => {
          alert("Location access denied");
        },
      );
    } else {
      alert("Geolocation is not supported");
    }
  };

  // Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8080/contact", formData);

      alert("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        lat: "",
        lon: "",
      });
    } catch (error) {
      alert("Failed to send message");
    }
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        minHeight: "100vh",
        backgroundImage:
          "url('https://images.pexels.com/photos/29857582/pexels-photo-29857582/free-photo-of-stunning-aerial-view-of-neist-point-lighthouse-at-golden-hour.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        padding: "40px",
      }}
    >
    
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(255, 255, 255, 0.6)",
          backdropFilter: "blur(10px)",
          zIndex: 1,
        }}
      ></div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          maxWidth: "1200px",
          width: "100%",
          gap: "20px",
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
        }}
      >

        <div style={{ flex: "1", paddingRight: "20px" }}>
          <h1
            style={{
              color: "#4a3f35",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Contact
          </h1>

          <h2
            style={{
              color: "#705531",
              marginBottom: "20px",
            }}
          >
            Please fill out the form below to send us an email.
          </h2>

          <h3
            style={{
              color: "#705531",
              fontSize: "14px",
              lineHeight: "1.5",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </h3>

          <p
            style={{
              fontWeight: "bold",
              color: "#4a3f35",
            }}
          >
            E-mail:
            <span style={{ fontWeight: "normal" }}>
              {" "}
              hello@reallygreatsite.com
            </span>
          </p>
        </div>


        <div
          style={{
            flex: "1",
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <form onSubmit={handleSubmit}>

            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label
                htmlFor="name"
                style={{
                  fontWeight: "bold",
                  color: "#4a3f35",
                }}
              >
                Name
              </label>

              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
                style={{
                  backgroundColor: "#e4dace",
                  borderRadius: "10px",
                  padding: "10px",
                  border: "1px solid #ccc",
                  width: "100%",
                }}
                placeholder="Enter your name"
                required
              />
            </div>

  
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label
                htmlFor="email"
                style={{
                  fontWeight: "bold",
                  color: "#4a3f35",
                }}
              >
                E-mail
              </label>

              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                style={{
                  backgroundColor: "#e4dace",
                  borderRadius: "10px",
                  padding: "10px",
                  border: "1px solid #ccc",
                  width: "100%",
                }}
                placeholder="Enter your email"
                required
              />
            </div>

           
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label
                htmlFor="subject"
                style={{
                  fontWeight: "bold",
                  color: "#4a3f35",
                }}
              >
                Subject
              </label>

              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                className="form-control"
                style={{
                  backgroundColor: "#e4dace",
                  borderRadius: "10px",
                  padding: "10px",
                  border: "1px solid #ccc",
                  width: "100%",
                }}
                placeholder="Enter your subject"
                required
              />
            </div>

       
            <div className="form-group" style={{ marginBottom: "20px" }}>
              <label
                htmlFor="message"
                style={{
                  fontWeight: "bold",
                  color: "#4a3f35",
                }}
              >
                Message
              </label>

              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                className="form-control"
                style={{
                  backgroundColor: "#e4dace",
                  borderRadius: "10px",
                  padding: "10px",
                  border: "1px solid #ccc",
                  width: "100%",
                  height: "100px",
                }}
                placeholder="Enter your message"
                required
              ></textarea>
            </div>

            <button
              type="button"
              onClick={getLocation}
              style={{
                backgroundColor: "#705531",
                color: "#fff",
                borderRadius: "20px",
                border: "none",
                padding: "10px 20px",
                fontWeight: "bold",
                fontSize: "16px",
                width: "100%",
                marginBottom: "15px",
              }}
            >
              Add My Location
            </button>

            {formData.lat && formData.lon && (
              <iframe
                src={`https://maps.google.com/maps?q=${formData.lat},${formData.lon}&output=embed`}
                width="100%"
                height="200"
                style={{
                  borderRadius: "10px",
                  marginBottom: "15px",
                  border: "none",
                }}
                loading="lazy"
                title="User Location"
              />
            )}

            <button
              type="submit"
              style={{
                backgroundColor: "#b56828",
                color: "#fff",
                borderRadius: "20px",
                border: "none",
                padding: "10px 20px",
                fontWeight: "bold",
                fontSize: "16px",
                width: "100%",
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
