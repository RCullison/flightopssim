export declare class Logger {
    private static getFormattedDateTime;
    private static getFileName;
    private static init;
    static error: (prefix: any, message: object | string) => void;
    static info: (prefix: any, message: object | string) => void;
    private static generalFunctLoggerHex;
    private static isExist;
    private static getDateXDaysAgo;
    private static getListMyNotZippedFilesInFolder;
    private static getListFilesFromListXDaysAgo;
    private static zipFileByDateAndRemoveSrc;
    private static appendData;
    static scheduler: (maxDays: number, min: number, hour: number) => void;
    private static doItNow;
    static getFuncName: (stack: string) => string;
}
