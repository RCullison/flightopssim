import { AIRWAYZ_ENTITY_DATA } from '../../../typings/all.typings';
import { Pilot } from './pilot';
import { Drone } from './Drone';
import { Alerts } from './alerts';
export declare class EntityData {
    pilot: Pilot;
    drone: Drone;
    alerts: Alerts;
    appVersion: string;
    time: string;
    config: {
        pilot: string;
        drone: string;
        alerts: string;
        appVersion: string;
        time: string;
    };
    constructor(obj: any);
    update: (obj: AIRWAYZ_ENTITY_DATA) => void;
    toJsonForSave: () => AIRWAYZ_ENTITY_DATA;
    toJsonForUI: () => AIRWAYZ_ENTITY_DATA;
    toJsonForDroneService: () => AIRWAYZ_ENTITY_DATA;
}
