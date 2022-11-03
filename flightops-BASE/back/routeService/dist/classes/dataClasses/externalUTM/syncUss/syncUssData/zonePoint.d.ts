import { ZONE_POINT } from '../../../../typings/all.typings';
export declare class ZonePoint {
    id: string;
    latitude: number;
    longitude: number;
    altitude: number;
    nfz_id: string;
    config: {
        id: string;
        latitude: string;
        longitude: string;
        altitude: string;
        nfz_id: string;
    };
    constructor(obj: any);
    update: (obj: ZONE_POINT) => void;
    toJsonForSave: () => ZONE_POINT;
    toJsonForUI: () => ZONE_POINT;
    toJsonForDroneService: () => ZONE_POINT;
}
