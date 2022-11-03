import * as core from 'express-serve-static-core';
export declare class ApiManager {
    private static instance;
    private constructor();
    listen: (router: core.Router) => boolean;
    private getHomeFromController;
    routers: {};
    static listen: (router: core.Router) => boolean;
}
