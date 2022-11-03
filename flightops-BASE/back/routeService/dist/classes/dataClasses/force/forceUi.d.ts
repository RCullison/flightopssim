import { POINT } from '../../typings/all.typings';
import { GeoPoint } from '../geo/geoPoint';
export declare class ForceUi {
    id: string;
    radius: number;
    location: GeoPoint;
    polygon: POINT[];
    styles: {
        color: string;
    };
    constructor(polygon: POINT[]);
    updateForce(polygon: POINT[]): void;
}
