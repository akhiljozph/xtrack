import koa from "koa";
import parser from "koa-bodyparser";
import cors from "@koa/cors";
import * as dotenv from 'dotenv';

import loadEnvConfig from "./config/env.config";

console.log(loadEnvConfig());

dotenv.config({ path: loadEnvConfig()  });

import dbClient from "./config/db.config";

const PORT = process.env.PORT || 3000;

const app = new koa();

app.use(cors());
app.use(parser());

app.use(async ctx => {
    ctx.body = "Hello World";
});

dbClient.connect()
    .then(() => {
        console.log('Hurray, Connected to Database.');
        app.listen(PORT, () => {
            console.log(`Ex-tracker is running on port ${PORT}`);
        });
    })
    .catch(err => console.error('Oops! Database connection error!\n', err.stack));
