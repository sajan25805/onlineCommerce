/**
 * Custom error handler class extending the Error class. 
 */

class ErrorHandler extends Error {

    /**
     * Creates an instance of ErrorHandler.
     * @param {string} errorMessage - The error message.
     * @param {number} [statusCode=500] - The Http status code associated with the error (default is 500).
     */

    constructor( errorMessage, statusCode= 500 ) {

        // Call the parent class constructor with the provided error message.
        super(errorMessage);

        // Assign the status code property.
        this.statusCode = statusCode;

        // Capture stack trace for better error logging
        Error.captureStackTrace(this, ErrorHandler);

    }
}

//  Export the ErrorHandler class for use in other modules.
export default ErrorHandler;



