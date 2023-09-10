import express from "express";
import "#core/load-env.js";
import path from "path";
import url from "url";
import { logErrorRequestMiddleare, logRequestMiddleare } from "#common/middlewares/logger.middlewares.js";
import { envConstants } from "#core/constants/index.js";
import { booksApi } from "#pods/book/index.js";
import { createRestApiServer } from "#core/server/rest-api.server.js";
// npm install inquirer @types/inquirer --save-dev

const restApiServer = createRestApiServer();

// TODO: Feed env variable in production
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
restApiServer.use(
  "/",
  express.static(path.resolve(__dirname, envConstants.STATIC_FILES_PATH))
);

restApiServer.use(logRequestMiddleare);

restApiServer.use("/api/books", booksApi);

restApiServer.use(logErrorRequestMiddleare);

restApiServer.listen(envConstants.PORT, () => {
  console.log("Server ready at port " + envConstants.PORT);
});
