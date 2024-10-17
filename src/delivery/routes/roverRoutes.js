import express from "express";
import {
  getRoverForm,
  getRoverImage,
} from "../controllers/roverControllers.js";
import { validate } from "../../middleware/validate.js";
import { roverImageSchema } from "../../validation/roverImageSchema.js";

const router = express.Router();

router.get("/image", getRoverForm);

router.post("/image", validate(roverImageSchema, "body"), getRoverImage);

export default router;
