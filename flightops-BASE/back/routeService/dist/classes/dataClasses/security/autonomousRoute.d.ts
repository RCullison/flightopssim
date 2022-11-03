import { ALGORITHM_STATUS, GEOPOINT3D_SHORT, ID_TYPE, MISSION_ROUTE_JSON_TO_SAVE, SECURITY_JSON_TO_UI, AUTONOMOUS_POINT, AUTONOMUS_ROUTE_FOR_FCS, ROUTE_SECURITY_DATA, MAPI_SECURITY_MISSION_DATA, POINT3D } from '../../typings/all.typings';
import { GeoPoint } from '../geo/geoPoint';
import { ActionPoint } from './actionPoint';
export declare class AutonomousRoute {
    routeId?: ID_TYPE;
    actionPoints: ActionPoint[];
    staticPart: AUTONOMOUS_POINT[];
    totalValue: number;
    styles: {
        colorPolyline: string;
        colorCircle: string;
        dashArr: string;
        weight: number;
        type: ALGORITHM_STATUS;
    };
    version: number;
    constructor(data?: ROUTE_SECURITY_DATA);
    update: (data: ROUTE_SECURITY_DATA) => void;
    updateEdit: (data: ROUTE_SECURITY_DATA) => void;
    private putDefaultParams;
    private saveActionPoints;
    private saveConfig;
    private functionSaveConfig;
    private updateActionPoints;
    private updateTotalValue;
    changePointsHeight: (defaultAlt: number) => void;
    changeRelativeAltIfNeed: (defaultAlt: number) => void;
    getGeoRoute: () => GEOPOINT3D_SHORT[];
    getGeoRouteStaticPart: () => GEOPOINT3D_SHORT[];
    getPOINT3D_Arr: () => POINT3D[];
    get_AUTONOMOUS_POINT_Arr: () => AUTONOMOUS_POINT[];
    toJsonForSave: () => MISSION_ROUTE_JSON_TO_SAVE;
    toJsonForUI: () => SECURITY_JSON_TO_UI;
    toJsonForDroneService: () => AUTONOMUS_ROUTE_FOR_FCS;
    getFirstPoint: () => GeoPoint;
    private saveConfigFromExternalSource;
    toJsonForMAPI: () => MAPI_SECURITY_MISSION_DATA;
}
