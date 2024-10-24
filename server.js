import express from "express";
import nunjucks from "nunjucks";

import { PORT } from "./src/config/index.js";
import meteorRouter from "./src/delivery/routes/meteorsRoutes.js";
import roverRouter from "./src/delivery/routes/roverRoutes.js";
import { errorHandler } from "./src/middleware/errorHandler.js";

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

nunjucks.configure("./src/views", {
  autoescape: true,
  express: app,
});

app.use("/meteors", meteorRouter);
app.use("/rover", roverRouter);

app.use(errorHandler);

app.use((req, res) => {
  res.status(404).send("Sorry can't find that!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
