import { GeoPoint } from '../geo/geoPoint';
export declare class RoutePoint {
    PointLocation: GeoPoint;
    Velocity: number;
    Yaw: number;
    constructor(_data: Object);
    saveConfig: {
        PointLocation: string;
        Velocity: string;
        Yaw: string;
    };
    setValues: (data: any, saveConfig: Object) => void;
    update: (data: Object) => void;
    toJsonForUI: () => {
        PointLocation: GeoPoint;
        Velocity: number;
        Yaw: number;
    };
}
