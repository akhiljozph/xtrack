import koa from "koa";
import cors from "@koa/cors";
import parser from "koa-bodyparser";

import "./config/env.config";
import router from "./routes";
import connectToDatabase from "./config/sequelize.db.config";

const PORT = process.env.PORT;

const app = new koa();

app.use(cors());
app.use(parser());

app.use(router.routes()).use(router.allowedMethods());

/**
 * * The following approach connects to the database using PostgreSQL's native capabilities.
 * 
 * import dbClient from "./config/db.config";
 * 
 * dbClient.connect()
 *   .then(() => {
 *       console.log('Hurray, Connected to Database.');
 *       app.listen(PORT, () => {
 *           console.log(`Ex-tracker is running on port ${PORT}`);
 *       });
 *   })
 *   .catch(err => console.error('Oops! Database connection error!\n', err.stack));
 * 
 */

connectToDatabase();