import { GeoPoint } from '../geo/geoPoint';
import { POINT } from '../../typings/all.typings';
export declare class Force {
    id: string;
    radius: number;
    location: GeoPoint;
    polygon: POINT[];
    styles: {
        color: string;
    };
    constructor(polygon: POINT[]);
    updateForce: (polygon: POINT[]) => boolean;
    toJsonForUI: () => Object;
}
