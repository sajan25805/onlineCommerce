import jwt from "jsonwebtoken";
import config from "../config/config.js";  
  
  /**
   * create token and saving that in cookies
   */

export const sendToken = (user, statusCode, res) => {
    const token = user.getJwtToken();
  
    // Options for cookies
    const options = {
      expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
      httpOnly: true,
      sameSite: "none",
      secure: true,
    };
  
    res.status(statusCode).cookie("token", token, options).json({
      success: true,
      user,
      token,
    });  
  };


/**
 * Activation Token
 */

export const createActivationToken = (user) => {
  return jwt.sign(user, config.auth.activationSecret, {
    expiresIn: "5m",
  });
};
