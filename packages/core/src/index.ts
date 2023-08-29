import express from "express";
import logger from "./logger";
import dotenv from "dotenv";

dotenv.config();

interface Bootstrap {
  port: number
}

function bootstrap({ port }: Bootstrap): express.Express {
  const app = express();
  app.listen(port, () => {
    logger.info(`Server is running on port: ${port}.`)
  });
  return app;
}

export { logger, bootstrap };

