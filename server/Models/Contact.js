import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
  lat: String,
  lon: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model(
  "contacts",
  ContactSchema
);