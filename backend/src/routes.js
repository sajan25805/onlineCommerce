import { Router } from "express";
import { Users } from "./routes/userRoute.js";

const router = Router();

router.get("/", (_, res) => {
  res.status(200).send("Vin.Clo is listening:");
});

router.use("user/", Users);

export default router;
