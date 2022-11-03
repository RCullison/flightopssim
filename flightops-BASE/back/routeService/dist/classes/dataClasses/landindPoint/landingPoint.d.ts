import { GEOPOINT3D, ID_TYPE, LANDING_LOCATION } from '../../typings/all.typings';
export declare class LandingPoint {
    id: ID_TYPE;
    location: GEOPOINT3D;
    name: string;
    landingSurfaceHeight: number;
    emergencyPointId?: ID_TYPE;
    saveConfig: {
        id: string;
        location: string;
        name: string;
        landingSurfaceHeight: string;
        emergencyPointId: string;
    };
    constructor(locationPoint: LANDING_LOCATION);
    update: (obj: LANDING_LOCATION) => void;
    updateModeDefine(drone: any, mdData: any): void;
    toJson: () => LANDING_LOCATION;
}
