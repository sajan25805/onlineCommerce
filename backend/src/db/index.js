import mongoose from "mongoose";
import config from "../config/config.js";

/**
 * Establishes a connection to MongoDB using Mongoose.
 */
async function connectToMongoDB() {
  try {
    // Connect to MongoDB using the provided URI and options
    await mongoose.connect(config.database.mongodb_uri, {});

    console.log("Connected to MongoDB successfully.");

  } catch (error) {
    // Handle connection errors
    console.error("Error connecting to MongoDB:", error);
  }
}


connectToMongoDB();