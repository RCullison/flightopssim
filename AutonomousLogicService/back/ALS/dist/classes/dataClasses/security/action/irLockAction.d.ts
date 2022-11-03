import { ACTION_TYPE, GEOPOINT3D_SHORT, IR_LOCK_ACTION_PARAMETERS } from '../../../typings/all.typings';
import { IActionData } from './iActionData';
export declare class IrLockAction implements IActionData {
    type: ACTION_TYPE;
    requestedAltitude: number;
    dropGeoPoint: GEOPOINT3D_SHORT;
    azimuth: number;
    constructor(data: IR_LOCK_ACTION_PARAMETERS, type: ACTION_TYPE);
    update: (data: Object) => void;
    private saveConfig;
    private functionSaveConfig;
    toJsonForSave: () => IR_LOCK_ACTION_PARAMETERS;
}
