import { Router } from "express";
import {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} from "../controllers/todo.controller.js";

// Create an instance of the router
const router = Router();

// Define routes
router.get("/", getAllTodos); // Route to get all todos
router.post("/add", createTodo); // Route to create a new todo
router.put("/update/:id", updateTodo); // Route to update a todo
router.delete("/delete/:id", deleteTodo); // Route to delete a todo

export default router;
