import koa from "koa";
import cors from "@koa/cors";
import parser from "koa-bodyparser";

import "./config/env.config";
import dbClient from "./config/db.config";

const PORT = process.env.PORT;

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
