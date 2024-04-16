import User from "../model/user.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Create a User
 *
 * @param { Object } req
 * @param { Object } res
 * @param { Function } next
 */
export const createUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const userEmail = await User.findOne({ email });

    if (userEmail) {
      return next(new ErrorHandler("User Already Exists", 400));
    }

    // Ensure that the file is uploaded before attempting to access its details
    if (!req.file) {
      return next(new ErrorHandler("Please upload a file", 400));
    }

    // Construct the file URL using the path to the uploads folder and the file name
    const fileUrl = path.join(__dirname, '../../../frontend/uploads/', req.file.filename);

    console.log("File URL:", fileUrl);

    const user = {
      name,
      email,
      password,
      avatar: fileUrl,
    };

    console.log("User:", user);

    return res.status(201).json({
      success: true,
      message: "User Created Successfully",
      user,
    });
  } catch (error) {
    console.error("Error:", error.stack);
    return res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};


/**
 * Get a User
 *
 * @param { Object } req
 * @param { Object } res
 * @param { Function } next
 */

export const getUser = async (req, res, next) => {
  try {
    const user = await User.find();

    return res.status(200).json({
      success: true,
      user: user,
    });
  } catch (error) {
    console.log("Error", error);
  }
};
