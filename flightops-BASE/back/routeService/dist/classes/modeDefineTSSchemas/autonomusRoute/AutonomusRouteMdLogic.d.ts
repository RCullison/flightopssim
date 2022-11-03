import { IModeDefine } from '../IModeDefine';
import { AIR_VEHICLE_STATUS, TASK } from '../../typings/all.typings';
export declare class AutonomusRouteMdLogic implements IModeDefine {
    constructor();
    validate(data: {
        task: TASK;
        airVehicleStatuses: Array<{
            airVehicleId: string;
            status: AIR_VEHICLE_STATUS;
        }>;
    }): any;
    private colorPolylineLogic;
    private colorCircleLogic;
    private dashArrLogic;
    private weightLogic;
    private typeLogic;
}
