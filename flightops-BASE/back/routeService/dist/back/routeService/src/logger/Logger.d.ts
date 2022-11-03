export declare class Logger {
    static logger: {};
    static init(prefix: any): void;
    static getFileName(prefix: any): string;
    static trace(prefix: any, message: any): void;
    static debug(prefix: any, message: any): void;
    static error(prefix: any, message: any): void;
    static info(prefix: any, message: any): void;
    static fatal(prefix: any, message: any): void;
    static json(prefix: any, data: any): void;
    static logWSRooms(header: any, rooms: any): void;
}
