import { ACTION_ON_ROUTE_END, ALGORITHM_STATUS, ROUTE_ALGORITHM_ENUM } from '../../typings/all.typings';
import { RoutePoint } from './routePoint';
export declare class RouteMission {
    MissionType: ROUTE_ALGORITHM_ENUM;
    MissionID: string;
    Status: ALGORITHM_STATUS;
    ActionOnRouteEnd: ACTION_ON_ROUTE_END;
    AltFromDrone: boolean;
    RoutePoints: {
        Point: RoutePoint;
    }[];
    styles: {};
    constructor(_data: Object);
    saveConfig: {
        MissionID: string;
        MissionType: string;
        ActionOnRouteEnd: string;
        AltFromDrone: string;
        RoutePoints: string;
        Status: string;
        styles: string;
    };
    setPrimitiveValues: (data: any, saveConfig: Object) => void;
    setObjectValues: (key: string, value: any, dataClass: any) => void;
    update: (data: Object) => void;
    toJsonForUI: () => {
        MissionID: string;
        MissionType: ROUTE_ALGORITHM_ENUM;
        Status: ALGORITHM_STATUS;
        styles: {};
    };
}
