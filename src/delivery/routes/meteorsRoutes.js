import express from "express";
import { getMeteorsController } from "../controllers/meteorsControllers.js";

const router = express.Router();

router.get("/", getMeteorsController);

export default router;
