import { ASYNC_RESPONSE, BOUND_DATA, CARTESIAN2, CELL_PARAMETERS, DEVIATION, DOUBLE_CHECK_CELLS, FROM_TO, FROM_TO_3D, ID_TYPE, MAP, MATRIX_DATA_3D, NFZ_DATA, PERIMETER_DATA, POINT, POINT3D, NFZ_INFLUENCE_REQUEST, RANGE, RANGE_CARTESIAN2, TOP_LEFT_BOTTOM_RIGHT } from '../../typings/all.typings';
export declare class MatrixUtility {
    private static instance;
    private constructor();
    private checkIsNotCrossNfzMatrix_3D;
    private checkLine;
    private checkLeftRightCells_3D_newLogic;
    private checkTopBottomCells_3D_newLogic;
    private static getRange;
    private checkCellNfz_3D;
    private computeCrossPoint;
    private findNearestPointOutsideNFZ_withSafetyFactor;
    private isPointOutsideNFZ;
    private cartographicPolygonToMatrix;
    private cartographicToMatrix;
    private matrixToCartographicCenterCell;
    private matrixToCartographic;
    private logicIncrementDeviation;
    private checkPartOfArea_singleNFZ_matrixIterator;
    private checkPartOfArea_singleNFZ_matrixIterator_new;
    private checkPartOfArea_singleNFZ_matrixIterator_new_new;
    private choiceSmollestRectangle;
    private checkPartOfArea_singleNFZ_matrix;
    private isNeedToCheckCell;
    private isNeedToCheckCellSingleMatrix;
    private setCellByNfz;
    private buildCellPointsCartographic;
    private buildCellPointsCartographicPolygon;
    private buildCellPointsCartesianPolygon;
    private checkPartOfArea;
    private computeBounds;
    private checkOutsideNfzMatirxPointWithSafetyFactor;
    private checkRoute_3D;
    private checkRoute_ASL;
    private cartographicPathToMatrix;
    private resetCell;
    private resetArea;
    private pathToRelativeBase;
    private addSafetyFactorToMatrix_0_1;
    static checkIsNotCrossNfzMatrix_3D: (matrixLine: FROM_TO_3D, matrix: MAP<MAP<number>>, heightRange: FROM_TO<number>, ifFullCheck?: boolean) => boolean;
    static checkLeftRightCells_3D_newLogic: (crossPoint: POINT, matrix: MAP<MAP<number>>, height: number) => DOUBLE_CHECK_CELLS;
    static checkTopBottomCells_3D_newLogic: (crossPoint: POINT, matrix: MAP<MAP<number>>, height: number) => DOUBLE_CHECK_CELLS;
    static checkCellNfz_3D: (cell: POINT, matrix: MAP<MAP<number>>, height: number) => boolean;
    static computeCrossPoint: (matrixLine0: FROM_TO<POINT3D | POINT>, matrixLine1: FROM_TO<POINT3D | POINT>, range: RANGE_CARTESIAN2) => POINT;
    static cartographicToMatrix: (point: (POINT | POINT3D), site: CELL_PARAMETERS) => POINT;
    static checkPartOfArea: (emptySite: MATRIX_DATA_3D, matrixDataMAP: MAP<MATRIX_DATA_3D>, forCheckRectangleRangeMatrix: TOP_LEFT_BOTTOM_RIGHT, forCheckRectangleRangeCartographic: TOP_LEFT_BOTTOM_RIGHT, nfz: NFZ_DATA, heightRange: RANGE) => MAP<MATRIX_DATA_3D>;
    static findNearestPointOutsideNFZ_withSafetyFactor: (site: MATRIX_DATA_3D, cartographicPoint: (POINT | POINT3D), height: number) => ASYNC_RESPONSE<POINT>;
    static isPointOutsideNFZ: (site: MATRIX_DATA_3D, cartographicPoint: (POINT | POINT3D), height: number) => boolean;
    static checkOutsideNfzMatirxPointWithSafetyFactor: (matrixPoint: POINT, site: MATRIX_DATA_3D, height: number) => boolean;
    static logicIncrementDeviation: (deviation?: DEVIATION) => DEVIATION;
    static computeBounds: (perimeterData: PERIMETER_DATA) => BOUND_DATA;
    static checkRoute_3D: (route: (POINT | POINT3D)[], site: MATRIX_DATA_3D, height: number, takeOffHeight: number) => boolean;
    static checkRoute_ASL: (route: POINT3D[], site: MATRIX_DATA_3D) => boolean;
    static resetArea: (emptySite: MATRIX_DATA_3D, matrixDataMAP: MAP<MATRIX_DATA_3D>, nfzRectangleRangeMatrix: TOP_LEFT_BOTTOM_RIGHT, allowedIdIgnore: ID_TYPE) => void;
    static matrixToCartographic: (site: CELL_PARAMETERS, point: (POINT | POINT3D)) => POINT3D;
    static pathToRelativeBase: (path: POINT3D[], factor: CARTESIAN2) => POINT3D[];
    static addSafetyFactorToMatrix_0_1: (matrix: MAP<MAP<number>>, matrixSize: CARTESIAN2, safetyFactorCellsNumber?: number) => MAP<MAP<number>>;
    static buildCellPointsCartographic: (matrixDataBlank: MATRIX_DATA_3D, cellNumber: number, lineNumber: number) => POINT[];
    static buildCellPointsCartographicPolygon: (matrixDataBlank: MATRIX_DATA_3D, cellNumber: number, lineNumber: number) => POINT[];
    static checkPartOfArea_singleNFZ_matrix: (matrixData: MATRIX_DATA_3D, forCheckRectangleRangeMatrix: TOP_LEFT_BOTTOM_RIGHT, nfz: NFZ_INFLUENCE_REQUEST) => MATRIX_DATA_3D;
}
