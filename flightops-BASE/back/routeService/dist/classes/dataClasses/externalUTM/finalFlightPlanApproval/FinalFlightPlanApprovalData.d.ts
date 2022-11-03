import { GET_FINAL_FLIGHT_PLAN_APPROVAL } from '../../../typings/all.typings';
export declare class FinalFlightPlanApprovalData {
    pid: string;
    plan_id: string;
    config: {
        pid: string;
        plan_id: string;
    };
    constructor(obj: any);
    update: (obj: GET_FINAL_FLIGHT_PLAN_APPROVAL) => void;
    toJsonForSave: () => GET_FINAL_FLIGHT_PLAN_APPROVAL;
    toJsonForUI: () => GET_FINAL_FLIGHT_PLAN_APPROVAL;
    toJsonForDroneService: () => GET_FINAL_FLIGHT_PLAN_APPROVAL;
}
