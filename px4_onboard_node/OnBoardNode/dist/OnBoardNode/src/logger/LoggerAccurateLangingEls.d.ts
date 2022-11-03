export declare class LoggerAccurateLangingEls {
    static configure: {};
    static logger: {};
    static init(prefix: string): void;
    static trace(prefix: string, message: string): void;
    static debug(prefix: any, message: any): void;
    static error(prefix: string, message: string): void;
    static info(prefix: string, message: string, noConsoleWrite?: boolean): void;
    static logKeys(manager: any, routes: any): void;
    static logValues(manager: any, rooms: any): void;
    static json(prefix: any, data: any): void;
}
