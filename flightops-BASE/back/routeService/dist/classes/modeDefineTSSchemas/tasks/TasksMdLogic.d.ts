import { IModeDefine } from '../IModeDefine';
import { AIR_VEHICLE_STATUS, TASK } from '../../typings/all.typings';
export declare class TasksMdLogic implements IModeDefine {
    constructor();
    validate(data: {
        task: TASK;
        airVehicleStatuses: Array<{
            airVehicleId: string;
            status: AIR_VEHICLE_STATUS;
        }>;
    }): any;
    private taskBorderColorLogic;
    private taskFillColorLogic;
    private taskColorStatusAirVehicle;
    private taskTextColorStatusAirVehicle;
    private taskColorStatusTask;
    private taskTextColorStatusTask;
    private colorStatusTaskList;
    private getColorWasp;
    private getIconShipping;
    private colorPolylineLogic;
    private colorCircleLogic;
    private dashArrLogic;
    private weightLogic;
}
