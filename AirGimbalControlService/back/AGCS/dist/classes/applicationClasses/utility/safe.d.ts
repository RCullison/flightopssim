declare function getSafe(fn: () => any, defaultVal?: any): any;
declare function getNoWarning(fn: () => any, defaultVal?: any): any;
declare function setSafe(obj: {}, props: string | Array<string>, value: any): boolean;
export declare const get: typeof getSafe;
export declare const getx: typeof getNoWarning;
export declare const set: typeof setSafe;
export {};
