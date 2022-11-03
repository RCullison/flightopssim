import { CARTESIAN2, POINT, POINT3D, RANGE_CARTESIAN2, TOP_LEFT_BOTTOM_RIGHT, VECTOR } from '../../typings/all.typings';
export declare class CartesianCalc {
    private static instance;
    private constructor();
    static calcDistance(vector: VECTOR): number;
    static vectorAlong(vector: VECTOR, distance?: number): POINT3D;
    private static computeDelta;
    static findFirstAndLastPointsOnLINE(points: POINT3D[]): VECTOR;
    static findFirst_LastDistancesOnVector(points: POINT3D[], vector: VECTOR | POINT3D[]): POINT3D;
    static findPointsCrossVectorAndPolygon(polygon: POINT3D[], vector: VECTOR | POINT3D[]): POINT3D[];
    static findNumberOfPointsCrossVectorAndPolygon(polygon: POINT3D[], point: POINT3D | POINT): number;
    static checkPointInPolygon(polygon: POINT3D[], point: POINT3D | POINT): boolean;
    static isCrossPolygonAndPolygon(polygon1: (POINT | POINT3D)[], polygon2: (POINT | POINT3D)[]): boolean;
    static isCrossRectangles(firstRectangle: VECTOR | POINT3D[], secondRectangle: VECTOR | POINT3D[]): boolean;
    static isCrossPolygonsRectangles(firstPolygon: (POINT | POINT3D)[], secondPolygon: (POINT | POINT3D)[]): boolean;
    static isCrossVectorAndPolygon(polygon: (POINT | POINT3D)[], vector: VECTOR | POINT3D[]): boolean;
    static checkCrossLines(l1: VECTOR, l2: VECTOR | POINT3D[]): boolean;
    static findCrossPoint(v1: VECTOR, v2: VECTOR | POINT3D[]): POINT3D;
    static checkCrossPolygon(polygon: POINT3D[]): boolean;
    static buildRectangleAroundPoint: (point: POINT3D, rectangleSizeDegree: CARTESIAN2) => POINT3D[];
    static findTopLeftAndBottomRitht: (points: (POINT | POINT3D)[]) => TOP_LEFT_BOTTOM_RIGHT;
    static checkGraphRange: (graphs: CARTESIAN2[][]) => RANGE_CARTESIAN2;
}
