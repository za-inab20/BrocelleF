import mongoose from "mongoose";

const UserSchema =
  new mongoose.Schema({

    uname: String,

    email: String,

    password: String,

    pic: String,

    role: {
      type: String,
      default: "user",
    },

  });

export default mongoose.model(
  "User",
  UserSchema
);