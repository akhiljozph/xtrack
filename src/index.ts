import koa from "koa";
import parser from "koa-bodyparser";
import cors from "@koa/cors";

const app = new koa();

app.use(cors());
app.use(parser());

const PORT = process.env.PORT || 3000;
const DB_URI = process.env.DB_URI || "";

app.use(async ctx => {
    ctx.body = "Hellow World";
});

app.listen(PORT, () => {
    console.log(`Ex-tracker is running on port ${PORT}`);
});
