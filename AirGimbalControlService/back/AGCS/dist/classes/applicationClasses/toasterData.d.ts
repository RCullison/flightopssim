export declare class ToasterData {
    type: string;
    message: string;
    title: string;
    options: {
        timeOut: number;
        positionClass: string;
        preventDuplicates: boolean;
    };
    tecnicalStatusesSaveConfig: {
        type: string;
        message: string;
        title: string;
        options: string;
        'options.timeOut': string;
        'options.positionClass': string;
        'options.preventDuplicates': string;
    };
    constructor(_data?: Object);
    setValues: (data: any, saveConfig: Object) => void;
    update: (data: Object) => void;
    toJsonForUI: () => {
        message: string;
        title: string;
        options: {
            timeOut: number;
            positionClass: string;
            preventDuplicates: boolean;
        };
    };
}
