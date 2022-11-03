import { ASYNC_RESPONSE, MAP, MATRIX_DATA_3D } from '../../typings/all.typings';
export declare class Compress {
    private static instance;
    private constructor();
    static pack: (data: Object) => string;
    static unpack: (data: string) => any;
    static pack_newLogic: (data: Object) => ASYNC_RESPONSE<string>;
    static unpack_newLogic: (data: string) => ASYNC_RESPONSE<any>;
    static matrixPack: (data: MAP<MATRIX_DATA_3D>) => ASYNC_RESPONSE<string>;
    static matrixUnpack: (data: string) => ASYNC_RESPONSE<MAP<MATRIX_DATA_3D>>;
}
