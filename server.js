import express from "express";
import nunjucks from "nunjucks";

import { PORT } from "./src/config/index.js";
import router from "./src/delivery/routes/meteorsRoutes.js";
import { errorHandler } from "./src/middleware/errorHandler.js";

const app = express();

app.use(express.static("public"));

nunjucks.configure("./src/views", {
  autoescape: true,
  express: app,
});

app.use("/meteors", router);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
