import express from "express";
import AppRouter from "./routes.js";
import ErrorHandler from "./utils/ErrorHandler.js";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import cors from "cors";
import "./db/index.js";




const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use("/", express.static("uploads"));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(fileUpload({ useTempFiles: true }));

app.use("/api/v1", AppRouter);
app.use(ErrorHandler);

export default app;


