import ErrorHandler from "../utils/ErrorHandler.js";

/**
 * Custom Error Handler Middleware.
 * @param {Error} error - The error object.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next function.
 *
 */



export default (error, req, res, next) => {
  // Set default status code and message for the error if not provided

  error.statusCode = error.statusCode || 500;
  error.message = error.message || "Internal Server Error ";

  // Handle specific Errors.

  //  If it's a CastError (wrong MongoDB id)
  if (error.name === "CastError") {
    const message = `Resources not found with this id.. Invalid ${error.path}`;
    // Create a new error using the ErrorHandler utility with a 400 status code
    error = new ErrorHandler(message, 400);
  }

  // Duplicate key error
  if (error.code === 11000) {
    const message = `Duplicate key ${Object.keys(error.keyValue)} Entered`;
    // Create a new error using the ErrorHandler utility with a 400 status code.
    error = new ErrorHandler(message, 400);
  }


  // Wrong JWT Error
  if (error.name === "JsonWebTokenError") {
    const message = " Your url is invalid ! Please try again letter.";
    // Create  a new error using ErrorHandler utility with a 400 status code.
    error = new ErrorHandler(message, 400);
  }


  // Token Expired Error
  if (error.name === "TokenExpiredError") {
    const message = `Your url is expired please try again letter! `;
    // Create a new error using ErrorHandler utility with a 400 status code.
    error = new ErrorHandler(message, 400);
  }


  res.status(error.statusCode).json({
    sucess: false,
    message: error.message,
  });
  
};



