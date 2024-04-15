import multer from "multer";

/**
 * Configuration for file storage using multer.
 * @type {multer.diskStorage}
 */
const storage = multer.diskStorage({
    /**
     * Function to determine the destination directory for uploaded files.
     * @param {Express.Request} req - The Express request object.
     * @param {Express.Multer.File} file - The uploaded file.
     * @param {Function} cb - The callback function to invoke with the destination directory path.
     */
    destination: function(req, file, cb) {
        cb(null, "uploads/");
    },
    /**
     * Function to determine the filename for uploaded files.
     * @param {Express.Request} req - The Express request object.
     * @param {Express.Multer.File} file - The uploaded file.
     * @param {Function} cb - The callback function to invoke with the filename.
     */
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const ext = file.originalname.split('.').pop(); // Get file extension
        cb(null, file.fieldname + '-' + uniqueSuffix + '.' + ext);
    }
});

/**
 * Middleware for handling file uploads.
 * @type {multer.Multer}
 */

export const upload = multer({ storage: storage });

