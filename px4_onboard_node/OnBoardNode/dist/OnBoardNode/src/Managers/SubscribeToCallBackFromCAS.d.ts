export declare class SubscribeToCallBackFromCAS {
    private static instance;
    private subscribers;
    private subscribe;
    private unsubscribe;
    private publish;
    static publish: (key: string, data: object) => void;
    static unsubscride: (key: string, ts: number) => void;
    static subscribe: (key: string, ts: number, dataOnSubscribe: object, func: Function) => void;
}
