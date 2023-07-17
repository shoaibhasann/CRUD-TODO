# Todo Web Application

This is a backend project for a Todo web application. The application allows users to manage their to-do list by creating, updating, and deleting tasks.

## API Endpoints

The following API endpoints are available:

- **GET /:** Retrieves all the todos created by the user.
- **POST /add:** Creates a new todo. The request must include the task as a mandatory input. If the task is not provided, the response will be "Validation failed".
- **PUT /update/:id:** Updates a todo with the specified ID. After updating, the response will be "Todo updated successfully" along with all the todos.
- **DELETE /delete/:id:** Deletes a todo with the specified ID. After deleting, the response will be "Todo deleted" along with all the remaining todos.

## Prerequisites

To run this project, you need to have the following installed:

- Node.js: [Download and install Node.js](https://nodejs.org)
- MongoDB: [Download and install MongoDB](https://www.mongodb.com)

## Getting Started

1. Clone the repository: `https://github.com/shoaibhasann/CRUD-TODO.git`
2. Install the dependencies: `npm install`
3. Set up the MongoDB connection in the `.env` file or update the MongoDB URL in `config.js`.
4. Start the server: `npm start`

The server will start running on the specified port (default is 8001). You can now make requests to the API endpoints using a tool like cURL or Postman.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- nodemon

## Contributing

Contributions to this project are welcome. Feel free to fork the repository and submit a pull request with your improvements.
