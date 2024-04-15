import User from "../model/user.js";
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

    const user = {
      name,
      email,
      password,
      avatar: fileUrl,
    };

    console.log(user);
    
    

  } catch (error) {

  }
};
