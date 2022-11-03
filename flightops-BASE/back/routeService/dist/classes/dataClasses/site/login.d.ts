export declare class Login {
    name: string;
    password: string;
    token?: string;
    saveConfig: {
        name: string;
        password: string;
        token: string;
    };
    constructor(data?: any);
    setValues: (data: any, saveConfig?: Object) => void;
    update: (data: Object) => void;
    toJsonForUI: () => {};
}
