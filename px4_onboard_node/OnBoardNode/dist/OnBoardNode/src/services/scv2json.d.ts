export declare class CSV2JSON {
    private static instance;
    private init;
    private eval_;
    private splitLevelPlus1;
    longitude: number;
    latitude: number;
    now: number;
    private convert;
    static init: () => void;
    static convert: (str: any) => object | boolean;
}
