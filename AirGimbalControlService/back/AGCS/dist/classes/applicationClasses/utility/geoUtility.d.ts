import { GeoPolygon } from '../../dataClasses/geo/geoPolygon';
import { ASYNC_RESPONSE, GEOPOINT, POINT, POINT3D } from '../../typings/all.typings';
import { GeoPoint } from '../../dataClasses/geo/geoPoint';
export declare class GeoUtility {
    private static instance;
    private constructor();
    static filterRoute2D: (route: POINT3D[]) => POINT3D[];
    static comparePoints2D: (point0: POINT | POINT3D, point1: POINT | POINT3D) => boolean;
    static validatePolygonPOINTsArr: (polygon: (POINT | POINT3D)[]) => boolean;
    static validateGeoPolygon: (polygon: GeoPolygon) => boolean;
    static validatePolygon: (pointsArr: (POINT | POINT3D)[]) => boolean;
    static validateAndFixPolygon: (pointsArr: (POINT | POINT3D)[]) => boolean;
    static isPOINTsArray: (points: POINT[] | POINT3D[]) => boolean;
    static isCartographicPOINTsArray: (points: (POINT | POINT3D)[]) => boolean;
    static isCartographicPOINT: (point: POINT | POINT3D) => boolean;
    static isGEOPOINT: (point: GEOPOINT) => boolean;
    static isPOINT: (point: POINT | POINT3D) => boolean;
    static checkIfGeoPointValid: (coordinates: GeoPoint) => boolean;
    static cutStaticPartFromLocation: (fullPath: POINT3D[], staticPath: POINT3D[], location: POINT3D, isReverse: boolean) => ASYNC_RESPONSE<POINT3D[]>;
}
