import { DRONE_GPS } from '../../../typings/all.typings';
export declare class DroneGps {
    gpsSatelliteCount: number;
    gpsSignalStrength: number;
    config: {
        gpsSatelliteCount: string;
        gpsSignalStrength: string;
    };
    constructor(obj: any);
    update: (obj: DRONE_GPS) => void;
    toJsonForSave: () => DRONE_GPS;
    toJsonForUI: () => DRONE_GPS;
    toJsonForDroneService: () => DRONE_GPS;
}
