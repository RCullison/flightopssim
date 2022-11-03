import { BOOLEAN_NUMBER, MAP, MATRIX_DATA_3D_RS, POINT3D, RANGE_CARTESIAN2 } from '../../../../../classes/typings/all.typings';
export declare class MatrixManager {
    private static instance;
    finder: any;
    private constructor();
    private generatePfGrid_3D;
    private computePath;
    private compressPath;
    private computeCompressPath;
    private convertMatrixToExternalFormat_3D_newLogic;
    private convertMatrixToExternalFormat_3D_with_filtering;
    static generatePfGrid_3D: (matrixNFZ_externalHeightMAP: BOOLEAN_NUMBER[][]) => any;
    static computeCompressPath: (cellPath: POINT3D[], grid: any) => any;
    static convertMatrixToExternalFormat_3D_newLogic: (matrix: MAP<MAP<number>>, height: number, range: RANGE_CARTESIAN2) => BOOLEAN_NUMBER[][];
    static convertMatrixToExternalFormat_3D_with_filtering: (siteFullData: MATRIX_DATA_3D_RS, range: RANGE_CARTESIAN2, heightASL: number) => BOOLEAN_NUMBER[][];
}
