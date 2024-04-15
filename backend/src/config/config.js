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
  }
};





