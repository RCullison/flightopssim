import { GeoPoint } from '../geo/geoPoint';
export declare class ObservationPoint {
    id: string;
    name: string;
    priority: number;
    location: GeoPoint;
    constructor(_observationPoint: Object);
}
