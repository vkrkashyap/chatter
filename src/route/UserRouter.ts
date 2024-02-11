import { UserController } from "../controller/UserController";
import { IRoute } from "./IRoute";
import { Controller, HTTTPVerbs, Middleware, Router } from "./type";

export class UserRouter implements IRoute {

    getConfig(): Router[] {
        const basePath = '/user';
        const controller = new UserController();
        return [
            {
                path: basePath + '/',
                method: HTTTPVerbs.GET,
                middleware: [],
                controller: controller.login
            }
        ]
    }

}
