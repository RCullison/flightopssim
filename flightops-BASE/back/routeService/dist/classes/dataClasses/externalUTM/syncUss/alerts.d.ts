import { ALERTS, COLLISION_ALERT, MAP } from '../../../typings/all.typings';
import { GlobalAlert } from './GlobalAlert';
import { DroneAlert } from './droneAlert';
export declare class Alerts {
    collisions: MAP<COLLISION_ALERT>;
    global: Array<Array<GlobalAlert>>;
    drones: Array<Array<DroneAlert>>;
    config: {
        collisions: string;
        global: string;
        drones: string;
    };
    constructor(obj: any);
    update: (obj: ALERTS) => void;
    toJsonForSave: () => ALERTS;
    toJsonForUI: () => ALERTS;
    toJsonForDroneService: () => ALERTS;
}
