import { MAP } from '../../typings/all.typings';
import { ASYNC_RESPONSE, MATRIX_DATA_3D, PRE_COMPRESSD_MATRIX_DATA_3D } from '../../typings/all.typings';
export declare class MatrixCompressor {
    private static instance;
    private constructor();
    private compressSiteData;
    private deCompressSiteData;
    private compressMatrix;
    private ArrComprss;
    private decompressMatrix;
    private ArrDeComprss;
    private arrNumberSorter;
    static compressSiteData: (matrixData3DMap: MAP<MATRIX_DATA_3D>) => ASYNC_RESPONSE<MAP<PRE_COMPRESSD_MATRIX_DATA_3D>>;
    static deCompressSiteData: (compressMatrixData3DMap: MAP<PRE_COMPRESSD_MATRIX_DATA_3D>) => ASYNC_RESPONSE<MAP<MATRIX_DATA_3D>>;
}
