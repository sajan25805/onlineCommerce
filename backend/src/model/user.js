import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import config from "../config/config.js";

// Define User Schema
// const userSchema = new mongoose.Schema({
//   username: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   phoneNumber: {
//     type: Number,
//   },
//   addresses: [
//     {
//       country: {
//         type: String,
//       },
//       city: {
//         type: String,
//       },
//       address1: {
//         type: String,
//       },
//       address2: {
//         type: String,
//       },
//       zipCode: {
//         type: Number,
//       },
//       addressType: {
//         type: String,
//       },
//     },
//   ],
//   role: {
//     type: String,
//     default: "user",
//   },
//   avatar: {
//     public_id: {
//       type: String,
//       required: true,
//     },
//     url: {
//       type: String,
//       required: true,
//     },
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now(),
//   },
//   resetPasswordToken: String,
//   resetPasswordTime: Date,
// });

// //  Hash password
// userSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) {
//     next();
//   }

//   this.password = await bcrypt.hash(this.password, 10);
// });

// // jwt token
// userSchema.methods.getJwtToken = function () {
//   return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
//     expiresIn: process.env.JWT_EXPIRES,
//   });
// };

// // compare password
// userSchema.methods.comparePassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };

// const userSchema = new mongoose.Schema({
// username: {
//   type: String,
//   required: true,
//   unique: true,
// },
// email: {
//   type: String,
//   required: true,
//   unique: true,
// },
// password: {
//   type: String,
//   required: true,
// },
// phoneNumber: {
//   type: Number,
// },
// addresses: [
//   {
//     country: {
//       type: String,
//     },
//     city: {
//       type: String,
//     },
//     address1: {
//       type: String,
//     },
//     address2: {
//       type: String,
//     },
//     zipCode: {
//       type: Number,
//     },
//     addressType: {
//       type: String,
//     },
//   },
// ],
// role: {
//   type: String,
//   default: "user",
// },
// avatar: {
//   public_id: {
//     type: String,
//     required: true,
//   },
//   url: {
//     type: String,
//     required: true,
//   },
// },
// createdAt: {
//   type: Date,
//   default: Date.now(),
// },
// resetPasswordToken: String,
// resetPasswordTime: Date,
// });

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user",
  },
  avatar: {
    type: String,
    default: "default_avatar.jpg", // You can set a default avatar image here if needed
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  // resetPasswordToken: String,
  // resetPasswordTime: Date,
});


//  Hash password
userSchema.pre("save", async function (next){
  if(!this.isModified("password")){
    next();
  }

  this.password = await bcrypt.hash(this.password, 10);
});


// jwt token
userSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id}, config.auth.jwtSecret,{
    expiresIn: config.auth.jwtExpiresIn,
  });
};


// compare password
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};


// Create User Model
const User = mongoose.model("User", userSchema);

export default User;

