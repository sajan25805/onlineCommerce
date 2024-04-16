import User from "../model/user.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import path from "path";

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

    const fileName = req.file.fileName;
    const fileUrl = path.join(fileName);

    console.log("FileName", fileName);

    const user = {
      name,
      email,
      password,
      avatar: fileUrl,
    };

    console.log(user);

    return res.status(201).json({
      success: true,
      message: "User Created Successfully",
      user,
    });
  } catch (error) {
    console.log("Error");

    // return res.status(400).json({
    //   success: false,
    //   error:error,
    // });
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
