import { POI } from '../../typings/all.typings';
export declare class Poi {
    latitude: number;
    longitude: number;
    altitude: number;
    id: number;
    name: string;
    delay: number;
    speed: number;
    config: {
        latitude: string;
        longitude: string;
        altitude: string;
        id: string;
        name: string;
        delay: string;
        speed: string;
    };
    constructor(obj: any);
    update: (obj: POI) => void;
    toJsonForSave: () => POI;
    toJsonForUI: () => POI;
    toJsonForDroneService: () => POI;
}
