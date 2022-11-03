import { PILOT } from '../../../typings/all.typings';
import { Position } from './position';
export declare class Pilot {
    id: string;
    callname: string;
    position: Position;
    config: {
        id: string;
        callname: string;
        position: string;
    };
    constructor(obj: any);
    update: (obj: PILOT) => void;
    toJsonForSave: () => PILOT;
    toJsonForUI: () => PILOT;
    toJsonForDroneService: () => PILOT;
}
