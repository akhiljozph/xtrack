import koa from "koa";
import cors from "@koa/cors";
import parser from "koa-bodyparser";

import "./config/env.config";
import dbClient from "./config/db.config";
import router from "./routes";
import sequelizeDBConfig from "./config/sequelize.db.config";

const PORT = process.env.PORT;

const app = new koa();

app.use(cors());
app.use(parser());

app.use(router.routes()).use(router.allowedMethods());

// dbClient.connect()
//     .then(() => {
//         console.log('Hurray, Connected to Database.');
//         app.listen(PORT, () => {
//             console.log(`Ex-tracker is running on port ${PORT}`);
//         });
//     })
//     .catch(err => console.error('Oops! Database connection error!\n', err.stack));

try {
    sequelizeDBConfig.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}
