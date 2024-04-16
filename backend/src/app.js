import express from "express";
import AppRouter from "./routes.js";
import ErrorHandler from "./middleware/error.js";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import bodyParser from "body-parser";
import cors from "cors";
import "./db/index.js";
import path from "path";
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
// Middleware setup
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

// Serve static files from the frontend uploads folder
app.use(express.static(path.join(__dirname, '../../frontend/uploads')));

// Routes setup
app.use("/api/v1", AppRouter);

// Error handling middleware
app.use(ErrorHandler);



export default app;






