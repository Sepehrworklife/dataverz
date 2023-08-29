import mongoose from "mongoose";
import { logger } from "dataverz-core";

class MongoDB {

  /**
   * Connects to a database using the provided URI.
   *
   * @param {string} uri - The URI of the database to connect to.
   */
  async connect(uri: string): Promise<void> {
    try {
      logger.info("Try to connecting to database...")
      await mongoose.connect(uri);
      logger.info("Database connected succesfully.")
    } catch (error) {
      throw logger.error(`${error}`);
    }
  }

  /**
   * Returns the handler.
   */
  get handler(): mongoose.Mongoose {
    return mongoose;
  }
}

export default MongoDB;
