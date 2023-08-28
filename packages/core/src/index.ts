import bootstrap from "./bootstrap";
import logger from "./logger";
import dotenv from "dotenv";

dotenv.config();


/** 
 * It can be overide by APP_PORT env variable.
 * @const @default
 */
const APP_PORT: number = 3000;

const dataverz = bootstrap({
  port: parseInt(process.env.APP_PORT || "") || APP_PORT,
});

export { logger };
export default dataverz;

