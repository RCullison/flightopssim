import { POINT3D } from '../../typings/class.typings';
import { POINT } from '../../typings/all.typings';
export declare class GeoLineString {
    geometry: {
        type: string;
        coordinates: POINT3D[];
    };
    constructor(_coordinates: (POINT | POINT3D)[]);
    toJson: () => {
        type: string;
        coordinates: POINT3D[];
    };
}
