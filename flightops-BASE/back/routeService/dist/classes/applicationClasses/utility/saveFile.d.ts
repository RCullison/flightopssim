export declare class SaveFile {
    private static instance;
    private constructor();
    private write;
    static write: (filename: string, data: any, callback?: Function) => void;
}
