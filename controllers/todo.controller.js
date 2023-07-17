import Todo from "../models/todo.model.js";

// Get all todos
const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Create a new todo
const createTodo = async (req, res) => {
  try {
    const { task } = req.body;
    const newTodo = new Todo({ task });
    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Update a todo
const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { task } = req.body;

    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { task },
      { new: true }
    );

    if (!updatedTodo) {
      return res.status(404).json({ error: "Todo not found" });
    }

    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Delete a todo
const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTodo = await Todo.findByIdAndRemove(id);

    if (!deletedTodo) {
      return res.status(404).json({ error: "Todo not found" });
    }

    res.status(200).json({ message: "Todo deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export {
  getAllTodos, // Export the function to get all todos
  createTodo, // Export the function to create a new todo
  updateTodo, // Export the function to update a todo
  deleteTodo, // Export the function to delete a todo
};
