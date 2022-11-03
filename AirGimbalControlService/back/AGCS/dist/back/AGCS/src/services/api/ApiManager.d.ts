import * as core from 'express-serve-static-core';
import { IRest } from '../../../../../classes/dataClasses/interfaces/IRest';
export declare class ApiManager implements IRest {
    private static instance;
    private constructor();
    listen: (router: core.Router) => boolean;
    private startFollowTarget;
    private finishFollowTarget;
    routers: {};
    static listen: (router: core.Router) => boolean;
}
