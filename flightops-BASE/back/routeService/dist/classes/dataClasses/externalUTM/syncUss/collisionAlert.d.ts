import { COLLISION_ALERT, ALERTS_DRONE_DATA } from '../../../typings/all.typings';
import { CollisionAlertSource } from './collisionAlertSource';
export declare class CollisionAlert {
    id: number;
    source: CollisionAlertSource;
    time: string;
    drones: Array<ALERTS_DRONE_DATA>;
    config: {
        id: string;
        source: string;
        time: string;
        drones: string;
    };
    constructor(obj: any);
    update: (obj: COLLISION_ALERT) => void;
    toJsonForSave: () => COLLISION_ALERT;
    toJsonForUI: () => COLLISION_ALERT;
    toJsonForDroneService: () => COLLISION_ALERT;
}
