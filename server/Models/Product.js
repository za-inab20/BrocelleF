import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  price: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    default: "",
  },
});

export default mongoose.model(
  "products",
  ProductSchema
);