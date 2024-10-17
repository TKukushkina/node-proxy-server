import Joi from "joi";

export const roverImageSchema = Joi.object({
  userId: Joi.string().required(),
  userName: Joi.string().required(),
  userApiKey: Joi.string().required(),
});
