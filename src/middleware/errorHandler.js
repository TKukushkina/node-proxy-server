export const errorHandler = (error, req, res, next) => {
  res
    .status(error.code || 500)
    .json({ error: error || "Internal Server Error" });
};
