import { AIRWAYZ_DRONE, AIRWAYZ_FLYINS_STATE, POSITION } from '../../../typings/all.typings';
import { DronePath } from './dronePath';
import { DroneGps } from './droneGps';
import { DroneAutonomous } from './droneAutonomous';
import { DroneAttitude } from './droneAttitude';
export declare class Drone {
    path: DronePath;
    isControllable: boolean;
    gps: DroneGps;
    autonomous: DroneAutonomous;
    id: number;
    name: string;
    model: string;
    attitude: DroneAttitude;
    positions: Array<POSITION>;
    flyingState: AIRWAYZ_FLYINS_STATE;
    battery: number;
    signalStrength: number;
    config: {
        path: string;
        isControllable: string;
        gps: string;
        autonomous: string;
        id: string;
        name: string;
        model: string;
        attitude: string;
        positions: string;
        flyingState: string;
        battery: string;
        signalStrength: string;
    };
    constructor(obj: any);
    update: (obj: AIRWAYZ_DRONE) => void;
    toJsonForSave: () => AIRWAYZ_DRONE;
    toJsonForUI: () => AIRWAYZ_DRONE;
    toJsonForDroneService: () => AIRWAYZ_DRONE;
}
