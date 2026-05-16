import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div>

      {/* HERO SECTION */}
      <div className="hero-section py-5">
        <Container>
          <Row className="align-items-center">

            <Col md={6}>
              <h1 className="fw-bold" style={{ color: "#b56828" }}>
                Clean. Moisture. Care.
              </h1>

              <p className="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>

              <Button
                className="mt-3 px-4 py-2"
                style={{
                  backgroundColor: "#a97e1c",
                  border: "none",
                  color: "white",
                }}
                onClick={() => navigate("/login")}
              >
                Shop Now
              </Button>
            </Col>

            <Col md={6}>
              <img
                src="https://images.pexels.com/photos/6690884/pexels-photo-6690884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Soap and Care"
                className="img-fluid rounded"
              />
            </Col>

          </Row>
        </Container>
      </div>

      {/* PRODUCT GRID */}
      <Container className="my-5">
        <Row>

          <Col md={4} className="mb-4">
            <img
              src="https://images.pexels.com/photos/3735152/pexels-photo-3735152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Product 1"
              className="img-fluid rounded"
            />
          </Col>

          <Col md={4} className="mb-4">
            <img
              src="https://images.pexels.com/photos/3735149/pexels-photo-3735149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Product 2"
              className="img-fluid rounded"
            />
          </Col>

          <Col md={4} className="mb-4">
            <img
              src="https://images.pexels.com/photos/7615887/pexels-photo-7615887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Product 3"
              className="img-fluid rounded"
            />
          </Col>

        </Row>
      </Container>

    </div>
  );
}

export default Home;