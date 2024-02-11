import { AppController } from "../controller/AppController";
import { IRoute } from "./IRoute";
import { HTTTPVerbs, Router } from "./type";

export class AppRouter implements IRoute {

    getConfig(): Router[] {
        const controller = new AppController();
        return [
            {
                path: '/login',
                method: HTTTPVerbs.GET,
                middleware: [],
                controller: controller.login,
            },
            {
                path: '/login',
                method: HTTTPVerbs.POST,
                middleware: [],
                controller: controller.processLogin,
            },
            {
                path: '/signup',
                method: HTTTPVerbs.GET,
                middleware: [],
                controller: controller.signup,
            },
            {
                path: '/signup',
                method: HTTTPVerbs.POST,
                middleware: [],
                controller: controller.processSignup,
            },
            {
                path: '/logout',
                method: HTTTPVerbs.POST,
                middleware: [],
                controller: controller.processSignup,
            }
        ]
    }

}