import { Request, Response } from 'express';
export declare class GimbalRouteManager {
    private static instance;
    private constructor();
    private listen;
    private routeGimbalSet;
    private checkFieldsAndSendResponse;
    routers: {};
    static listen: (router: any) => void;
    static routeGimbalSet: (request: Request, response: Response) => void;
}
