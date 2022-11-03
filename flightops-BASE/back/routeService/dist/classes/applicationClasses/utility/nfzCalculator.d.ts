import { MAP, MATRIX_DATA_3D, POINT, POINT3D } from '../../typings/all.typings';
export declare class NfzCalculator {
    private static instance;
    private visited;
    private height;
    private nfzCellsMap;
    private matrixMetaData;
    private toVisit;
    private constructor();
    private startSearch;
    private checkIfToAddCellToNfzMap;
    private isCellInsideNfzPolygon;
    private isPlygonIntersectWithMatrix;
    private getNeighbors;
    private setNfzInMatrix;
    static setNfzInMatrix: (matrix: MATRIX_DATA_3D, polygon: (POINT | POINT3D)[], height: number) => MAP<MAP>;
}
