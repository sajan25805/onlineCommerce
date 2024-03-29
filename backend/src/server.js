import app from "./app.js";

import winston from "winston";

const logger = winston.createLogger({
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: "logs/error.log", level: "error" }),
        new winston.transports.File({ filename: "logs/all.log", level:"info"})
    ]
});


/**
 *
 * Handling Uncaught exceptions:
 */

// process.on("uncaughtException")

logger

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});




