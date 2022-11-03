import { DRONE_ALERTS, AIRWAYZ_TYPE_ENUM } from '../../../typings/all.typings';
import { CollisionAlertSource } from './collisionAlertSource';
import { DroneAlertPath } from './DroneAlertPath';
export declare class DroneAlert {
    source: CollisionAlertSource;
    type: AIRWAYZ_TYPE_ENUM;
    time: number;
    id: number;
    path: DroneAlertPath;
    config: {
        collisions: string;
        global: string;
        drones: string;
    };
    constructor(obj: any);
    update: (obj: DRONE_ALERTS) => void;
    toJsonForSave: () => DRONE_ALERTS;
    toJsonForUI: () => DRONE_ALERTS;
    toJsonForDroneService: () => DRONE_ALERTS;
}
