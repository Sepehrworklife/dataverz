import dotenv from "dotenv";
dotenv.config();

import dataverz from "dataverz-core";

dataverz.get("/", (req, res) => {
  res.send("herllo world");
})
