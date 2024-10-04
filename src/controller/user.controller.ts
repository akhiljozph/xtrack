import { Response, Request } from "koa";

import log from "../common/logger/logger";

export function createUserHandler(request: Request, response: Response) {
    log.info(`CreateUserHandler: ${request.url} has requested!`);
}