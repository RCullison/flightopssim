import { TELEMETRY_SERVICE_DATA } from "../../../../../../classes/typings/all.typings";
import { I_FillLogic } from './I_FillLogic';
export declare class DgiFillLogic implements I_FillLogic {
    constructor();
    convertDroneData: (received: TELEMETRY_SERVICE_DATA) => any;
    private gpsPositionToLocation;
    private gps_TP_ASL;
}
