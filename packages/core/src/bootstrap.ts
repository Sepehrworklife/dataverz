import express from "express";
import logger from "./logger";

interface Bootstrap {
  port: number
}

function bootstrap({ port }: Bootstrap): express.Express {
  const app = express();
  app.listen(port, () => {
    logger.info(`Server is running on port ${port}.`)
  });
  return app;
}


export default bootstrap;
