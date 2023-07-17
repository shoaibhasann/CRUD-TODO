import mongoose from "mongoose";

// Create a schema for the Todo model
const todoSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the Todo model using the schema
const Todo = mongoose.model("Todo", todoSchema);

export default Todo;
