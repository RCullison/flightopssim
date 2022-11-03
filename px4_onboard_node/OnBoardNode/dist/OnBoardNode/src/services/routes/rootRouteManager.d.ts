export declare class RootRouteManager {
    private static instance;
    private projConf;
    private name;
    private lastTimeStartedLand;
    private constructor();
    private listen;
    private routeLand;
    private routeTakeOff;
    private routeData;
    private telemetryData;
    private validateLandingTypeNormal;
    private validateLandingTypeAccurate;
    private validateLandingTypeOptic;
    private commonLandingValidateAndSetFields;
    private validateTakeOffParams;
    private accurateLanding;
    private homePositionSet;
    private stopAccLanding;
    private stopVisualLanding;
    private testVerticalMoving;
    private changeOwner;
    private doHeading;
    private setIsStartedLand;
    private landNow;
    private stopLandNow;
    routers: {};
    static listen: (router: any, projConf: any) => void;
}
