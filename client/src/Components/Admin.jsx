import React, { useState, useEffect } from "react";

import axios from "axios";

import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Form,
  FormGroup,
  Input,
  Button,
} from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";

function Admin() {
  // ================= PRODUCT STATES ================= //

  const [title, setTitle] = useState("");

  const [price, setPrice] = useState("");

  const [image, setImage] = useState("");

  // ================= COURSE STATES ================= //

  const [courseTitle, setCourseTitle] = useState("");

  const [courseDuration, setCourseDuration] = useState("");

  const [courseDescription, setCourseDescription] = useState("");

  const [courseImage, setCourseImage] = useState("");

  // ================= CONTACT MESSAGES ================= //

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMessages();
  }, []);

  // ================= FETCH CONTACT ================= //

  const fetchMessages = async () => {
    try {
      const response = await axios.get("http://localhost:8080/contact");

      setMessages(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // ================= ADD PRODUCT ================= //

  const handleAddProduct = async () => {
    if (!title || !price || !image) {
      alert("Please fill all product fields");

      return;
    }

    try {
      await axios.post("http://localhost:8080/api/products", {
        title,
        price,
        image,
      });

      alert("Product added successfully");

      setTitle("");
      setPrice("");
      setImage("");
    } catch (error) {
      console.log(error);
    }
  };

  // ================= ADD COURSE ================= //

  const handleAddCourse = async () => {
    if (!courseTitle || !courseDuration || !courseDescription || !courseImage) {
      alert("Please fill all course fields");

      return;
    }

    try {
      await axios.post("http://localhost:8080/courses", {
        title: courseTitle,
        duration: courseDuration,
        description: courseDescription,
        image: courseImage,
      });

      alert("Course added successfully");

      setCourseTitle("");
      setCourseDuration("");
      setCourseDescription("");
      setCourseImage("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="py-5">
      {/* HEADER */}

      <div className="text-center mb-5">
        <h1
          className="fw-bold"
          style={{
            color: "#b56828",
            fontSize: "3rem",
          }}
        >
          Admin Dashboard
        </h1>

        <p
          style={{
            color: "#705531",
          }}
        >
          Manage products, courses, and customer messages
        </p>
      </div>

      <Row>
        {/* ADD PRODUCT */}

        <Col md="6" className="mb-4">
          <Card
            className="shadow border-0 h-100"
            style={{
              borderRadius: "20px",
            }}
          >
            <CardBody>
              <CardTitle tag="h3" className="mb-4">
                Add Product
              </CardTitle>

              <Form>
                <FormGroup>
                  <Input
                    placeholder="Product Name"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </FormGroup>

                <FormGroup>
                  <Input
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </FormGroup>

                <FormGroup>
                  <Input
                    placeholder="Image URL"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                  />
                </FormGroup>

                <Button
                  block
                  style={{
                    backgroundColor: "#b56828",
                    border: "none",
                  }}
                  onClick={handleAddProduct}
                >
                  Add Product
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>

        {/* ADD COURSE */}

        <Col md="6" className="mb-4">
          <Card
            className="shadow border-0 h-100"
            style={{
              borderRadius: "20px",
            }}
          >
            <CardBody>
              <CardTitle tag="h3" className="mb-4">
                Add Course
              </CardTitle>

              <Form>
                <FormGroup>
                  <Input
                    placeholder="Course Title"
                    value={courseTitle}
                    onChange={(e) => setCourseTitle(e.target.value)}
                  />
                </FormGroup>

                <FormGroup>
                  <Input
                    placeholder="Course Duration"
                    value={courseDuration}
                    onChange={(e) => setCourseDuration(e.target.value)}
                  />
                </FormGroup>

                <FormGroup>
                  <Input
                    type="textarea"
                    rows="5"
                    placeholder="Course Description"
                    value={courseDescription}
                    onChange={(e) => setCourseDescription(e.target.value)}
                  />
                </FormGroup>

                <FormGroup>
                  <Input
                    placeholder="Course Image URL"
                    value={courseImage}
                    onChange={(e) => setCourseImage(e.target.value)}
                  />
                </FormGroup>

                <Button
                  block
                  style={{
                    backgroundColor: "#705531",
                    border: "none",
                  }}
                  onClick={handleAddCourse}
                >
                  Add Course
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* CONTACT MESSAGES */}

      <Card
        className="shadow border-0 mt-4"
        style={{
          borderRadius: "20px",
        }}
      >
        <CardBody>
          <CardTitle tag="h3" className="mb-4">
            User Messages
          </CardTitle>

          {messages.length === 0 ? (
            <p>No messages yet.</p>
          ) : (
            <Row>
              {messages.map((msg, index) => (
                <Col md="6" className="mb-4" key={index}>
                  <Card
                    className="border-0 shadow-sm h-100"
                    style={{
                      borderRadius: "15px",
                    }}
                  >
                    <CardBody>
                      <h5 className="fw-bold">{msg.name}</h5>

                      <p>
                        <strong>Email:</strong> {msg.email}
                      </p>

                      <p>
                        <strong>Subject:</strong> {msg.subject}
                      </p>

                      <p>
                        <strong>Message:</strong> {msg.message}
                      </p>

                      {msg.lat && msg.lon && (
                        <iframe
                          src={`https://maps.google.com/maps?q=${msg.lat},${msg.lon}&output=embed`}
                          width="100%"
                          height="200"
                          style={{
                            border: "none",
                            borderRadius: "12px",
                          }}
                          loading="lazy"
                          title="User Location"
                        />
                      )}
                    </CardBody>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </CardBody>
      </Card>
    </Container>
  );
}

export default Admin;
