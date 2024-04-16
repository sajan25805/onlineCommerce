import User from "../model/user.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import path from "path";
import jwt from "jsonwebtoken";
import config from "../config/config.js";
import sendMail from "../utils/sendMail.js";

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
    const fileUrl = path.join(req.file.filename);

    console.log("File URL:", fileUrl);

    const user = {
      name,
      email,
      password,
      avatar: fileUrl,
    };

    const activationToken = createActivationToken(user);

    const activationUrl = `http://localhost:5173/activation/${activationToken}`;

    try {
      await sendMail({
        email: user.email,
        subject: "Account Activation",
        message: `Hi ${user.name},\n\nPlease click on the following link to activate your account:\n\n${activationUrl}\n\nIf you did not make this request, please ignore this email and your account will not be activated.\n\nSincerely,\n${config.app.name}`,
      });

      res
        .status(201)
        .json({
          success: true,
          message: `Please Check your email: ${user.email} to activate your account`,
        });
    } catch (error) {
      res.status(500).json({ success: false, message: `${error.stack}` });
    }

    // const newUser = await User.create(user);

    // console.log("User:", user);

    // return res.status(201).json({
    //   success: true,
    //   message: "User Created Successfully",
    //   user: newUser,
    // });
  } catch (error) {
    console.error("Error:", error.stack);
    return res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

/**
 * Activation Token
 */

const createActivationToken = (user) => {
  return jwt.sign(user, config.auth.activationSecret, {
    expiresIn: "5m",
  });
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
