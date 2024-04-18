import { Router } from "express";
import { upload } from "../services/multer.js";
import * as UserController from "../controller/user.js";
import { isAuthenticated } from "../middleware/auth.js";

const router = Router();

/**
 * Create a User
 */

router.post("/create-user", upload.single("file"), UserController.createUser);

/**
 * Activate a User
 */

router.post("/activate-user", UserController.activateUser);

/**
 * Get all User List
 */

router.get("/users", isAuthenticated, UserController.getUser);

/** 
 * Login User
 */

router.post("/login", UserController.loginUser);

export const Users = router;
