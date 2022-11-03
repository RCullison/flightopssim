import { GeoLineString } from '../../dataClasses/geo/geoLineString';
import { COMPUTE_ROUTE_BYPASS_RELIEF, GEOPOINT, GEOPOINT3D, GEOPOINT3D_SHORT, GEOPOINT_SHORT, POINT, POINT3D, POINT_ON_PATH } from '../../typings/all.typings';
import { GeoPoint } from '../../dataClasses/geo/geoPoint';
import { GeoPolygon } from '../../dataClasses/geo/geoPolygon';
export declare class Convertation {
    private static instance;
    private constructor();
    static POINT3D_Arr_to_GEOPOINT3D_SHORT_Arr: (points: POINT3D[]) => GEOPOINT3D_SHORT[];
    static POINT3D_Arr_to_GEOPOINT3D_SHORT_Arr_withHeight: (points: POINT3D[], height: number) => GEOPOINT3D_SHORT[];
    static POINT3D_to_GEOPOINT_3D_SHORT: (startPoint: POINT3D) => GEOPOINT3D_SHORT;
    static POINT3D_to_GEOPOINT_3D: (startPoint: POINT3D) => GEOPOINT3D;
    static GeoPoint_to_GEOPOINT: (startPoint: GeoPoint) => GEOPOINT;
    static GeoPoint_to_GEOPOINT3D: (startPoint: GeoPoint) => GEOPOINT3D;
    static GeoPoint_to_GEOPOINT_3D_SHORT: (startPoint: GeoPoint) => GEOPOINT3D_SHORT;
    static GeoPoint_to_POINT: (startPoint: GeoPoint) => POINT;
    static GeoPoint_to_POINT3D: (startPoint: GeoPoint) => POINT | POINT3D;
    static GeoLineString_to_POINT3D_Array: (geoLineString: GeoLineString) => (POINT3D | POINT)[];
    static GeoLineString_to_POINT_Array: (geoLineString: GeoLineString) => POINT[];
    static POINTsArr_To_GeoLineString: (pointsArr: (POINT3D | POINT)[]) => GeoLineString;
    static POINT3D_to_POINT: (point: POINT3D) => POINT;
    static POINT3D_Array_to_POINT_Array: (points: POINT3D[]) => POINT[];
    static GEOPOINT_3D_SHORT_to_POINT: (startPoint: GEOPOINT3D_SHORT) => POINT;
    static GEOPOINT_to_GeoPoint: (startPoint: GEOPOINT, height?: number) => GeoPoint;
    static GEOPOINT3D_to_GeoPoint: (point: GEOPOINT3D) => GeoPoint;
    static GEOPOINT_3D_SHORT_to_POINT3D: (point: GEOPOINT3D_SHORT) => POINT3D;
    static GEOPOINT_to_POINT3D: (startPoint: GEOPOINT, height?: number) => POINT3D;
    static GEOPOINT3D_to_GEOPOINT_3D_SHORT: (geoPoint: GEOPOINT3D) => GEOPOINT3D_SHORT;
    static GEOPOINT3D_to_POINT3D: (geoPoint: GEOPOINT3D) => POINT3D;
    static GEOPOINT3D_Arr_to_POINT3D_Arr: (geoPoints: GEOPOINT3D[]) => POINT3D[];
    static GEOPOINT_to_POINT: (startPoint: GEOPOINT, height?: number) => POINT;
    static POINT_to_GeoPoint: (point: POINT | POINT3D) => GeoPoint;
    static POINT_to_GEOPOINT: (startPoint: POINT | POINT3D) => GEOPOINT;
    static POINT_Arr_to_GEOPOINT_Arr: (points: (POINT | POINT3D)[]) => GEOPOINT[];
    static GEOPOINT_UI_to_POINT3D: (startPoint: GEOPOINT_SHORT, height?: number) => POINT3D;
    static GEOPOINT_UI_to_GeoPoint: (startPoint: GEOPOINT_SHORT) => GeoPoint;
    static POINT_to_GEOPOINT_UI: (startPoint: POINT | POINT3D) => GEOPOINT_SHORT;
    static POINT_to_GEOPOINT3D: (startPoint: POINT3D) => GEOPOINT3D;
    static Geopoint_To_turfPoint: (geopoint: GeoPoint) => any;
    static POINT_To_turfPoint: (point: (POINT3D | POINT)) => any;
    static POINTs_Arr_Arr_To_turfPolygon: (polygons: (POINT3D | POINT)[][]) => GeoPolygon;
    static GeoPolygon_To_turfPolygon: (polygon: GeoPolygon) => GeoPolygon;
    static GeoPolygon_To_POINTsArrArr: (polygon: GeoPolygon) => (POINT | POINT3D)[][];
    static POINTs_To_turfLine: (points: (POINT | POINT3D)[]) => any;
    static angleTo180_180: (angle: number) => number;
    static path_to_POINT_ON_PATH_Arr: (requestData: COMPUTE_ROUTE_BYPASS_RELIEF, isPointFixed?: boolean, isHeightFixed?: boolean) => POINT_ON_PATH[];
    static POINT_ON_PATH_Arr_to_POINT3D_Arr: (pathForCompute: POINT_ON_PATH[]) => POINT3D[];
    static POINT_ON_PATH_Arr_to_GEOPOINT_Arr: (pathForCompute: POINT_ON_PATH[]) => GEOPOINT[];
}
