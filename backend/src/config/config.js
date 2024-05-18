/**
 * 
 * Import the environment variables from the "env.js" file
 * 
 */

import "../env.js";


/**
 *
 * Exporting an object containing the data from .env directly.
 *
 */

export default {
  port: process.env.PORT,
  database:{
    mongodb_uri:process.env.MONGODB_URI,
  },
  auth:{
    activationSecret:process.env.ACTIVATION_SECRET,
    jwtSecret:process.env.JWT_SECRET_KEY,
    jwtExpiresIn:process.env.JWT_EXPIRES,
  },
  app:{
    name:process.env.APP_NAME,
  }

};




