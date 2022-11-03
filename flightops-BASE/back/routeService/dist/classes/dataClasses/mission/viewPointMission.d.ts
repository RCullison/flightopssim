import { ACTION_ON_ROUTE_END, ALGORITHM_STATUS, POINT, ROUTE_ALGORITHM_ENUM } from '../../typings/all.typings';
export declare class ViewPointMission {
    MissionType: ROUTE_ALGORITHM_ENUM;
    MissionID: string;
    Status: ALGORITHM_STATUS;
    ActionOnRouteEnd: ACTION_ON_ROUTE_END;
    viewPoint: POINT;
    viewAzimuth: number;
    styles: {};
    constructor(_data: Object);
    saveConfig: {
        MissionID: string;
        MissionType: string;
        ActionOnRouteEnd: string;
        Status: string;
        viewPoint: string;
        viewAzimuth: string;
        styles: string;
    };
    setPrimitiveValues: (data: any, saveConfig: Object) => void;
    update: (data: Object) => void;
    toJsonForUI: () => {
        MissionID: string;
        MissionType: ROUTE_ALGORITHM_ENUM;
        Status: ALGORITHM_STATUS;
        styles: {};
    };
}
