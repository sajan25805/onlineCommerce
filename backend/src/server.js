import app from "./app.js";
import config from "./config/config.js";


/**
 *
 * Handling Uncaught exceptions:
 *
 *
 */

process.on("uncaughtException", (e) => {
  console.log("Error: ", e.stack);
});

const server = app.listen(config.port || 5000, () => {
  console.log(`Vin.Clo is listening on port ${config.port}`);
});



/**
 *
 *Unhandled Promise Rejection
 *
 **/

process.on("unhandledRejection", (err) => {
  console.log(`Shutting down the server: Error ${err.stack}`);
  console.log(`Shutting down the server for unhandled promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});


