import express from "express";
import { getMeteorsController } from "../controllers/meteorsControllers.js";
import { validate } from "../../middleware/validate.js";
import { meteorsSchema } from "../../validation/meteorsSchema.js";

const router = express.Router();

router.get("/", validate(meteorsSchema, "query"), getMeteorsController);

export default router;
