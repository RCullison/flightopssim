import { Poi } from '../poiData';
import { DRONE_ALERT_PATH } from '../../../typings/all.typings';
export declare class DroneAlertPath {
    planId: number;
    dpeTime: Date;
    poi: Array<Poi>;
    config: {
        planId: string;
        dpeTime: string;
        poi: string;
    };
    constructor(obj: any);
    update: (obj: DRONE_ALERT_PATH) => void;
    toJsonForSave: () => DRONE_ALERT_PATH;
    toJsonForUI: () => DRONE_ALERT_PATH;
    toJsonForDroneService: () => DRONE_ALERT_PATH;
}
