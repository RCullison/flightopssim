import { POINT, POINT3D } from '../../typings/all.typings';
export declare class GeoPoint {
    geometry: {
        type: string;
        coordinates: POINT3D;
    };
    constructor(_coordinates: POINT | POINT3D);
}
