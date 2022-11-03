import { DRONE_ATTITUDE } from '../../../typings/all.typings';
export declare class DroneAttitude {
    yaw: number;
    roll: number;
    pitch: number;
    time: string;
    config: {
        yaw: string;
        roll: string;
        pitch: string;
        time: string;
    };
    toJsonForSave: () => DRONE_ATTITUDE;
    toJsonForUI: () => DRONE_ATTITUDE;
    toJsonForDroneService: () => DRONE_ATTITUDE;
}
