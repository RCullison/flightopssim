export declare class TecnicalStatuses {
    c2Comm: boolean;
    droneService: boolean;
    webServer: boolean;
    dms: boolean;
    sms: boolean;
    smsData: boolean;
    tecnicalStatusesSaveConfig: {
        dms: string;
        sms: string;
        smsData: string;
        c2Comm: string;
        droneService: string;
        webServer: string;
        'styles.dms': string;
        'styles.sms': string;
        'styles.smsData': string;
        'styles.c2Comm': string;
        'styles.droneService': string;
        'styles.webServer': string;
        styles: string;
    };
    styles: {
        c2Comm: boolean;
        droneService: boolean;
        webServer: boolean;
        dms: boolean;
        sms: boolean;
        smsData: boolean;
    };
    constructor(_data?: Object);
    setValues: (data: any, saveConfig: Object) => void;
    update: (data: Object) => void;
    toJsonForUI: () => {
        styles: {
            c2Comm: boolean;
            droneService: boolean;
            webServer: boolean;
            dms: boolean;
            sms: boolean;
            smsData: boolean;
        };
        dms: boolean;
        sms: boolean;
        smsData: boolean;
        c2Comm: boolean;
        droneService: boolean;
    };
}
