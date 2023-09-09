//* This code is a basic configuration for creating a web server that can serve and process requests for a RESTful API.

// Import necessary modules
import express from "express"; // Import Express.js for building the API
import cors from "cors"; // Import CORS middleware for handling cross-origin requests
import "./loadEnvironment.mjs"; // Import a custom module for environment variable loading
import records from "./routes/record.mjs"; // Import the routes for handling records

// Define the port for the Express server to listen on
const PORT = process.env.PORT || 3000;

// Create an instance of the Express application
const app = express();

// Enable CORS middleware to allow cross-origin requests
app.use(cors());

// Parse incoming requests with JSON payloads
app.use(express.json());

// Define a route for handling record-related requests
app.use("/record", records);

// Start the Express server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
