import { GLOBAL_ALERTS, AIRWAYZ_TYPE_ENUM } from '../../../typings/all.typings';
import { CollisionAlertSource } from './collisionAlertSource';
export declare class GlobalAlert {
    source: CollisionAlertSource;
    type: AIRWAYZ_TYPE_ENUM;
    time: string;
    id: number;
    config: {
        source: string;
        type: string;
        time: string;
        id: string;
    };
    constructor(obj: any);
    update: (obj: GLOBAL_ALERTS) => void;
    toJsonForSave: () => GLOBAL_ALERTS;
    toJsonForUI: () => GLOBAL_ALERTS;
    toJsonForDroneService: () => GLOBAL_ALERTS;
}
