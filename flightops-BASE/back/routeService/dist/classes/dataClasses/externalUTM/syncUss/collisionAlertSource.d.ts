import { COLLISION_ALERT_SOURCE } from '../../../typings/all.typings';
export declare class CollisionAlertSource {
    id: string;
    name: string;
    config: {
        id: string;
        name: string;
    };
    constructor(obj: any);
    update: (obj: COLLISION_ALERT_SOURCE) => void;
    toJsonForSave: () => COLLISION_ALERT_SOURCE;
    toJsonForUI: () => COLLISION_ALERT_SOURCE;
    toJsonForDroneService: () => COLLISION_ALERT_SOURCE;
}
