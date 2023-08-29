import { bootstrap } from "dataverz-core";
import Database from "dataverz-database";


const APP_PORT = 3000;


const database = new Database(
  process.env.DATABASE_URI || "",
);
database.initialize();
const dbHandler = database.handler;


const express = bootstrap({
  port: parseInt(process.env.APP_PORT || "") || APP_PORT
});

declare global {
  var dataverz: {
    express: typeof express;
    db: typeof dbHandler;
  }
}

globalThis.dataverz = {
  express: express, db: dbHandler
}




