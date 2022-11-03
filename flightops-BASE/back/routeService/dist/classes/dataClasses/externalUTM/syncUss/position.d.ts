import { POSITION } from '../../../typings/all.typings';
export declare class Position {
    latitude: number;
    longitude: number;
    altitude: number;
    time: number;
    accuracy: number;
    config: {
        latitude: string;
        longitude: string;
        altitude: string;
        time: string;
        accuracy: string;
    };
    constructor(obj: any);
    update: (obj: POSITION) => void;
    toJsonForSave: () => POSITION;
    toJsonForUI: () => POSITION;
    toJsonForDroneService: () => POSITION;
}
