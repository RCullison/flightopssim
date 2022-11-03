import { POINT3D } from '../../typings/class.typings';
import { POINT } from '../../typings/all.typings';
export declare class GeoPolygon {
    geometry: {
        type: string;
        coordinates: (POINT3D | POINT)[][];
    };
    constructor(_polygons: (POINT3D | POINT)[][]);
    update: (polygon: (POINT3D | POINT)[][]) => void;
    addPolygon: (polygon: (POINT3D | POINT)[]) => void;
}
