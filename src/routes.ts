import Router from "koa-router";

import logger from "./common/logger/logger";

const router = new Router({
    prefix: '/api/v1'
});

router.post('/user', ctx => {
    let user = ctx.request.body;
    logger.info('User created', user);
    ctx.response.status = 201;
});

export default router;