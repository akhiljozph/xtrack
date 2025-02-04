import Router from "koa-router";

const filterRoutes = new Router();

filterRoutes.get('/hello', async(ctx) => {
    ctx.body = { message: "Hello from filterRoutes."}
});

export default filterRoutes;