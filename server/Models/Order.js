import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  price: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model(
  "orders",
  OrderSchema
);