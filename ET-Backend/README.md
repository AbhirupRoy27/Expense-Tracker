# Expense Tracker Backend

![Node.js](https://img.shields.io/badge/Node.js-14.x-green.svg)
![Express.js](https://img.shields.io/badge/Express.js-4.x-orange.svg)
![MongoDB](https://img.shields.io/badge/MongoDB-4.x-brightgreen.svg)

This is the backend for the Expense Tracker application. It is a Node.js application built with Express.js and MongoDB, providing a RESTful API for the frontend to manage expense data.

## Technologies Used

- **Node.js:** A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express.js:** A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
- **MongoDB:** A cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.
- **Mongoose:** An Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.
- **dotenv:** A zero-dependency module that loads environment variables from a `.env` file into `process.env`.
- **cors:** A node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm
- MongoDB

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2.  Navigate to the `ET-Backend` directory:
    ```bash
    cd ET-Backend
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```

### Environment Variables

Create a `.env` file in the root of the `ET-Backend` directory and add the following environment variables:

```
PORT=3001
DB_URI=<your-mongodb-connection-string>
```

Replace `<your-mongodb-connection-string>` with your actual MongoDB connection string.

### Running the Application

To run the application in development mode (with hot-reloading), use:

```bash
npm run dev
```

To run the application in production mode, use:

```bash
npm start
```

The server will start on the port specified in your `.env` file (defaulting to 3000).

## API Endpoints

The API is prefixed with `/api`.

### `POST /add-money`

Adds a new expense to the database.

**Request Body:**

```json
{
  "amount": 100,
  "message": "Groceries",
  "category": "Food"
}
```

**Response:**

- **201 Created:** If the expense is added successfully.
  ```json
  {
    "status": true,
    "message": "Data Added"
  }
  ```
- **400 Bad Request:** If the request body is invalid.
  ```json
  {
    "status": false,
    "message": "Invalid body"
  }
  ```
- **500 Internal Server Error:** If there is a server error.

### `GET /get-all-detail`

Retrieves all expenses from the database.

**Response:**

- **200 OK:**
  ```json
  {
    "status": true,
    "data": [
      {
        "_id": "60f1b3b3b3b3b3b3b3b3b3b3",
        "amount": 100,
        "message": "Groceries",
        "category": "Food",
        "createdAt": "2023-01-01T00:00:00.000Z",
        "updatedAt": "2023-01-01T00:00:00.000Z"
      }
    ]
  }
  ```
- **500 Internal Server Error:** If there is a server error.

## Project Structure

The backend follows a standard MVC-like (Model-View-Controller) pattern.

```
ET-Backend/
├───app.js                 # Main application file where the express app is initialized and configured.
├───controllers/           # Contains the business logic of the application.
│   ├───add-money/
│   │   └───addMoneyController.js  # Handles the logic for adding a new expense.
│   ├───DB/
│   │   └───connectDB.js         # Manages the connection to the MongoDB database.
│   └───get-transactions/
│       └───getTransactionController.js # Handles the logic for retrieving all expenses.
├───middleware/
│   └───addMoneyBodyValidator.js # Middleware for validating the request body of the /add-money endpoint.
├───model/
│   └───userDataModel.js       # Defines the Mongoose schema and model for the expense data.
└───routes/
    └───inputRoute.js          # Defines the API routes and maps them to the corresponding controllers.
```
