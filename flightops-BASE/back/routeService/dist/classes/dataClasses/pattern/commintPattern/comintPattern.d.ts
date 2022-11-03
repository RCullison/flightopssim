import { BaseCommintPattern } from './base_ComintPattern';
import { GeoPoint } from '../../geo/geoPoint';
export declare class CommintPattern extends BaseCommintPattern {
    commintSaveConfig: {};
    constructor(data?: Object);
    update: (data: Object) => void;
    updateCenter: (data: GeoPoint) => void;
    toJson: () => {
        latitude: number;
        longitude: number;
    };
}
