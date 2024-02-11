import { IRoute } from "./IRoute";
import { UserRouter } from "./UserRouter"
import core from 'express';
import { HTTTPVerbs } from "./type";

export class RouteRegistory {
    // Add all route classes inside register method
    private routers: IRoute[] = [new UserRouter];

    register = (app: core.Express) => {
        this.routers.forEach(route => {
            const config = route.getConfig();

            config.forEach((route) => {
                if (route.method == HTTTPVerbs.GET) {
                    app.get(route.path, route.middleware, route.controller);
                } else if (route.method == HTTTPVerbs.POST) {
                    app.post(route.path, route.middleware, route.controller);;
                } else if (route.method == HTTTPVerbs.PUT) {
                    app.put(route.path, route.middleware, route.controller);
                } else if (route.method == HTTTPVerbs.PATCH) {
                    app.put(route.path, route.middleware, route.controller);;
                } else if (route.method == HTTTPVerbs.DELETE) {
                    app.delete(route.path, route.middleware, route.controller);;
                }
            });
        });
    }
}