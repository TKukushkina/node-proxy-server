import Exception from "../utils/Exception.js";

export const validate =
  (schema, source = "body") =>
  async (req, res, next) => {
    const data = source === "body" ? req.body : req.query;

    const { error } = await schema.validate(data);

    if (error) {
      const errorMessage = error.details
        .map((detail) => detail.message)
        .join(", ");

      next(new Exception(403, errorMessage));
    }

    next();
  };
