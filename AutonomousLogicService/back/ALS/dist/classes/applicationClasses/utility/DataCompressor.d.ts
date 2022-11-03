/// <reference types="node" />
export declare class DataCompressor {
    private static instance;
    private constructor();
    private deCompressDataHandler;
    private compressData;
    private deCompressData;
    private setParams;
    static compressData: (data: any) => Buffer;
    static deCompressData: (buffer: string) => {};
}
