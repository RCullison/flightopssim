import { ACTION_ON_ROUTE_END, ALGORITHM_STATUS, MAPI_ROUTE_MISSION_DATA, POINT, POINT3D, ROUTE_DATA, ROUTE_JSON_TO_SAVE, ROUTE_JSON_TO_UI, ROUTE_POINT_DATA_DRONESERVICE, ROUTE_POINT_DATA_UI, YAW_MODE } from '../../typings/all.typings';
import { PointOfRoute } from './pointOfRoute';
import { GeoPoint } from '../geo/geoPoint';
export declare class Route {
    routeId: string;
    yaw: number;
    toBody: boolean;
    yawMode: YAW_MODE;
    velocity: number;
    actionOnRouteEnd: ACTION_ON_ROUTE_END;
    altitude: number;
    altFromDrone: boolean;
    routePoints: PointOfRoute[];
    styles: {
        colorPolyline: string;
        colorCircle: string;
        dashArr: string;
        weight: number;
        type: ALGORITHM_STATUS;
    };
    totalValue: number;
    constructor(data?: ROUTE_DATA);
    update: (data: Object) => void;
    private saveRoutePoints;
    private getFinishShowParameters;
    toJsonForUI: (loiterRadius?: number) => ROUTE_JSON_TO_UI;
    toJsonForSave: () => ROUTE_JSON_TO_SAVE;
    routePointsToJson: () => ROUTE_POINT_DATA_UI[];
    getPoints: () => POINT[];
    getPoints3D: () => POINT3D[];
    toJsonForDroneService: () => ROUTE_POINT_DATA_DRONESERVICE;
    private saveConfig;
    private functionSaveConfig;
    getFirstPoint: () => GeoPoint;
    getLastPoint: () => GeoPoint;
    toJsonForMAPI: () => MAPI_ROUTE_MISSION_DATA;
}
