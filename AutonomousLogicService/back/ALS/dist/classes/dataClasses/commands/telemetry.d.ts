import { PARAMS_FIELDS_TYPE } from '../../typings/all.typings';
export declare class Telemetry {
    private air_vehicle_id;
    private battery_voltage;
    private height_above_takeoff;
    private gps_health;
    private velocity;
    private lat;
    private lon;
    private last_change_time;
    private ack;
    constructor(data: any);
    update: (obj: any) => void;
    config: {
        battery_voltage: string;
        air_vehicle_id: string;
        height_above_takeoff: string;
        gps_health: string;
        velocity: string;
        lat: string;
        lon: string;
        last_change_time: string;
        ack: string;
    };
    toJson: () => Object;
    static getParams: () => {
        filed: string;
        type: PARAMS_FIELDS_TYPE;
    }[];
}
