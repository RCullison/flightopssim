import { AIR_VEHICLE_UPDATE_DATA } from './all.typings';
export declare type DRONE_REQUEST = Partial<{
    land: {
        id: string;
    };
    arm: {
        id: string;
    };
    disarm: {
        id: string;
    };
    takeOff: {
        id: string;
        absHeight: number;
    };
    add: {
        ip: string;
        name?: string;
        operationalAlt?: string;
    };
    remove: {
        id: string;
    };
    update: AIR_VEHICLE_UPDATE_DATA;
    setHome: {
        id: string;
        lat: number;
        lon: number;
        alt: number;
    };
    getHome: {
        id?: string;
    };
    getParams: {
        id?: string;
    };
}>;
