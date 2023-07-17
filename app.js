import express from "express";
import todoRoutes from "./routes/todo.route.js"

const app = express();

// middleware to parse json request bodies
app.use(express.json());

// Handle user routes
app.use('/', todoRoutes);

// handle request for all other routes..
app.use('*', (req,res) => {
    res.status(404).send('OOPS! Page not found.');
});

export default app;