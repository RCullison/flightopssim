import { CANCEL_FLIGHT_PLAN_APPROVAL } from '../../../typings/all.typings';
export declare class CancelFlightPlanData {
    pid: string;
    plan_id: string;
    config: {
        pid: string;
        plan_id: string;
    };
    constructor(obj: any);
    update: (obj: CANCEL_FLIGHT_PLAN_APPROVAL) => void;
    toJsonForSave: () => CANCEL_FLIGHT_PLAN_APPROVAL;
    toJsonForUI: () => CANCEL_FLIGHT_PLAN_APPROVAL;
    toJsonForDroneService: () => CANCEL_FLIGHT_PLAN_APPROVAL;
}
