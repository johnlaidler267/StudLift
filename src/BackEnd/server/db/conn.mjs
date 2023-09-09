// Import the MongoClient module from the "mongodb" library
import { MongoClient } from "mongodb";

// Define the MongoDB connection string, including your username, password, and cluster URL
const connectionString = "mongodb+srv://adudenamedjohnny:CowZebra98@cluster0.eneuwak.mongodb.net/?retryWrites=true&w=majority" || "";

// Create a new instance of the MongoClient using the connection string
const client = new MongoClient(connectionString);

let conn;
try {
    // Attempt to establish a connection to the MongoDB cluster
    conn = await client.connect();
} catch (e) {
    // Handle connection errors, if any, and log them to the console
    console.error(e);
}

// Select the "Customers" database from the connected MongoDB cluster
let db = conn.db("Customers");

// Export the "db" object to make it available for other parts of your application
export default db;
