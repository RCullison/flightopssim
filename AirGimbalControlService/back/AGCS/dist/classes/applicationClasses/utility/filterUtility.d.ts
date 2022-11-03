import { CARTESIAN2, POINT3D } from '../../typings/all.typings';
export declare class FilterUtility {
    private static instance;
    private constructor();
    private points3DStraightFilter;
    private cartesian2StraightFilter;
    private points_CARTESIAN2_3_StraightFilter;
    private pointInLine;
    private euclideanDistanceVector;
    static points3DStraightFilter: (pointsArr: POINT3D[], accuracyDigits?: number) => POINT3D[];
    static cartesian2StraightFilter: (pointsArr: CARTESIAN2[], accuracyDigits?: number) => CARTESIAN2[];
    static points_CARTESIAN2_3_StraightFilter: (pointsArr: CARTESIAN2[], accuracyDigits?: number) => CARTESIAN2[];
}
