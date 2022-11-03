import { ALERT_DATA_UI, ALERT_STYLE, ALERT_TYPE, ID_TYPE } from '../../typings/all.typings';
export declare class Alert {
    id: ID_TYPE;
    type: ALERT_TYPE;
    distance: number;
    airVehicleIdFrom: ID_TYPE;
    airVehicleIdTo: ID_TYPE;
    styles: ALERT_STYLE;
    config: {
        id: string;
        type: string;
        distance: string;
        airVehicleIdFrom: string;
        airVehicleIdTo: string;
        styles: string;
    };
    constructor(drone?: ALERT_DATA_UI);
    update: (obj: any) => void;
    updateModeDefine: (mdData: any) => void;
    toJsonForUI: () => ALERT_DATA_UI;
}
