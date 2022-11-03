import { LOG } from '../../../../classes/typings/all.typings';
export declare class Logger {
    private static instance;
    private getFormattedDateTime;
    private getFileName;
    private init;
    private generalFunctLoggerHex;
    private isExist;
    private getDateXDaysAgo;
    private getListMyNotZippedFilesInFolder;
    private getListFilesFromListXDaysAgo;
    private zipFileByDateAndRemoveSrc;
    private appendData;
    private doItNow;
    private scheduler;
    private log;
    private error;
    private info;
    private getFuncName;
    static scheduler: (maxDays: number, min: number, hour: number) => void;
    static log: (data: LOG) => void;
    static error: (prefix: any, message: object | string) => void;
    static info: (prefix: any, message: object | string) => void;
    static getFuncName: (stack: string) => string;
}
