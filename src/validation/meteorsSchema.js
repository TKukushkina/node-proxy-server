import Joi from "joi";
import JoiDate from "@joi/date";

export const meteorsSchema = Joi.object({
  "were-dangerous-meteors": Joi.boolean().optional(),
  count: Joi.boolean().optional(),
  date: Joi.extend(JoiDate).date().format("YYYY-MM-DD").optional(),
});
