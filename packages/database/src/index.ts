import MongoDB from "./mongodb";

interface Database {
  db: "mongodb"
  uri: string;
}

const classes = {
  "mongodb": new MongoDB
}

class Database {
  constructor(uri: string, db: "mongodb" = "mongodb") {
    this.db = db;
    this.uri = uri;
  }

  /**
   * Initializes the database process.
   */
  async initialize() {
    if (this.db === "mongodb") {
      const mongodb = new MongoDB();
      await mongodb.connect(this.uri);
    }
  }

  /**
   * Returns the handler for the Database.
   */
  get handler() {
    return classes.mongodb.handler;
  }
}

export default Database;
