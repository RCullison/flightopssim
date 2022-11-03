import { DRONE_AUTONOMOUS, AIRWAYZ_MODE_ENUM } from '../../../typings/all.typings';
export declare class DroneAutonomous {
    mode: AIRWAYZ_MODE_ENUM;
    config: {
        mode: string;
    };
    constructor(obj: any);
    update: (obj: DRONE_AUTONOMOUS) => void;
    toJsonForSave: () => DRONE_AUTONOMOUS;
    toJsonForUI: () => DRONE_AUTONOMOUS;
    toJsonForDroneService: () => DRONE_AUTONOMOUS;
}
