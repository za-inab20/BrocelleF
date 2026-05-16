import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import UserModel from "./Models/Users.js";
import ProductModel from "./Models/Product.js";
import OrderModel from "./Models/Order.js";
import ContactModel from "./Models/Contact.js";
import CourseModel from "./Models/Course.js";
const app = express();

app.use(cors());
app.use(express.json());


// ================= MongoDB Connection ================= //

const conStr =
  "mongodb://admin:admin123@ac-8ajrwq3-shard-00-00.3alxnf6.mongodb.net:27017,ac-8ajrwq3-shard-00-01.3alxnf6.mongodb.net:27017,ac-8ajrwq3-shard-00-02.3alxnf6.mongodb.net:27017/Brocelle?ssl=true&replicaSet=atlas-9jpjdc-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(conStr)
  .then(() => console.log("MongoDB Connected ✔"))
  .catch((err) => console.log("MongoDB Error ❌", err));


// ===================================================== //
// ===================== USER ROUTES =================== //
// ===================================================== //


// Register User
app.post("/register", async (req, res) => {
  try {

    const existingUser = await UserModel.findOne({
      email: req.body.email,
    });

    if (existingUser) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }

    const newUser = new UserModel({
      uname: req.body.uname,
      email: req.body.email,
      password: req.body.password,
      pic: req.body.pic,
role: req.body.role,
    });

    await newUser.save();

    res.status(201).json({
      message: "Registration successful",
      user: newUser,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
});


// Login User
app.post("/login", async (req, res) => {
  try {

    const user = await UserModel.findOne({
      email: req.body.email,
    });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    if (user.password !== req.body.password) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    res.status(200).json({
      message: "Login successful",
      user,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
});


// Get All Users
app.get("/users", async (req, res) => {
  try {

    const users = await UserModel.find();

    res.json(users);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
});


// Delete User
app.delete("/users/:id", async (req, res) => {
  try {

    await UserModel.findByIdAndDelete(req.params.id);

    res.json({
      message: "User deleted successfully",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
});


// ===================================================== //
// =================== PRODUCT ROUTES ================== //
// ===================================================== //


// Add Product
app.post("/products", async (req, res) => {
  try {

    const product = new ProductModel({
      title: req.body.title,
      price: req.body.price,
      image: req.body.image,
    });

    await product.save();

    res.status(201).json({
      message: "Product added successfully",
      product,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
});


// Get All Products
app.get("/products", async (req, res) => {
  try {

    const products = await ProductModel.find();

    res.json(products);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
});
// اضافه منتج 
app.post("/api/products", async (req, res) => {
  try {
    const product = new ProductModel(req.body);
    await product.save();

    res.json({
      message: "Product added successfully",
      product,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// جلب منتج
app.get("/api/products", async (req, res) => {
  try {
    const products = await ProductModel.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// Get Single Product
app.get("/products/:id", async (req, res) => {
  try {

    const product = await ProductModel.findById(
      req.params.id
    );

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.json(product);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
});


// Update Product
app.put("/products/:id", async (req, res) => {
  try {

    const updatedProduct =
      await ProductModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

    res.json({
      message: "Product updated successfully",
      product: updatedProduct,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
});


// Delete Product
app.delete("/products/:id", async (req, res) => {
  try {

    await ProductModel.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message: "Product deleted successfully",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
});


// ===================================================== //
// ==================== ORDER ROUTES =================== //
// ===================================================== //


// Create Order
app.post("/orders", async (req, res) => {
  try {

    const order = new OrderModel({
      title: req.body.title,
      price: req.body.price,
    });

    await order.save();

    res.status(201).json({
      message: "Order created successfully",
      order,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
});


// Get All Orders
app.get("/orders", async (req, res) => {
  try {

    const orders = await OrderModel.find();

    res.json(orders);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
});

// ================= COURSE ROUTES ================= //

// Add Course
app.post("/courses", async (req, res) => {
  try {

    const course = new CourseModel({
      image: req.body.image,
      title: req.body.title,
      duration: req.body.duration,
      description: req.body.description,
    });

    await course.save();

    res.status(201).json({
      message: "Course added successfully",
      course,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
});


// Get All Courses
app.get("/courses", async (req, res) => {
  try {

    const courses = await CourseModel.find();

    res.json(courses);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
});


// Delete Course
app.delete("/courses/:id", async (req, res) => {
  try {

    await CourseModel.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message: "Course deleted successfully",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
});


// ===================================================== //
// =================== CONTACT ROUTES ================== //
// ===================================================== //


// Send Contact Message
app.post("/contact", async (req, res) => {

  try {

    const newMessage = new ContactModel({
      name: req.body.name,
      email: req.body.email,
      subject: req.body.subject,
      message: req.body.message,
      lat: req.body.lat,
      lon: req.body.lon,
    });

    await newMessage.save();

    res.status(201).json({
      message: "Message sent successfully",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
});


// Get All Contact Messages
app.get("/contact", async (req, res) => {
  try {

    const contacts = await ContactModel.find();

    res.json(contacts);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
});


// ===================================================== //
// ======================= SERVER ====================== //
// ===================================================== //

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} ✔`);
});