export const validate =
  (schema, source = "body") =>
  async (req, res, next) => {
    const data = source === "body" ? req.body : req.query;

    const { error } = await schema.validate(data);

    if (error) {
      const errorMessage = error.details
        .map((detail) => detail.message)
        .join(", ");
      return res.status(403).json({ message: errorMessage });
    }

    next();
  };
