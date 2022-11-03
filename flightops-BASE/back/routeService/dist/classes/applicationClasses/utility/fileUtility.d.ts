import { ASYNC_RESPONSE } from '../../typings/all.typings';
export declare class FileUtility {
    private static instance;
    private constructor();
    private writeFile;
    static writeFile: (fileNameSuffix: string, dataForWrite: any) => Promise<ASYNC_RESPONSE>;
}
