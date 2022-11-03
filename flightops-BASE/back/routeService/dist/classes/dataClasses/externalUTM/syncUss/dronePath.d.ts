import { Poi } from '../poiData';
import { DRONE_PATH } from '../../../typings/all.typings';
export declare class DronePath {
    nextPoiIndex: number;
    poi: Array<Poi>;
    config: {
        nextPoiIndex: string;
        poi: string;
    };
    constructor(obj: any);
    update: (obj: DRONE_PATH) => void;
    toJsonForSave: () => DRONE_PATH;
    toJsonForUI: () => DRONE_PATH;
    toJsonForDroneService: () => DRONE_PATH;
}
