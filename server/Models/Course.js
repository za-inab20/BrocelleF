import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({

  image: String,
  title: String,
  duration: String,
  description: String,

});

export default mongoose.model(
  "Course",
  CourseSchema
);