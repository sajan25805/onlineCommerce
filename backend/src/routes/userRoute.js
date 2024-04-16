import { Router } from "express";
import path from "path";
import { upload } from "../services/multer.js";
import * as UserController from "../controller/user.js";

const router = Router();

/**
 * Create a User
 */

router.post("/create-user", upload.single("file"), UserController.createUser);

/**
 * Get all User List
 */

router.get("/users",UserController.getUser);

export const Users = router;

