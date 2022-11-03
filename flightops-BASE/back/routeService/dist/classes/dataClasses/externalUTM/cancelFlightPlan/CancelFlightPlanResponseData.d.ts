import { CANCEL_FLIGHT_PLAN_RESPONSE, REQUEST_STATE_ENUM } from '../../../typings/all.typings';
export declare class CancelFlightPlanResponse {
    requestState: REQUEST_STATE_ENUM;
    config: {
        requestState: string;
    };
    constructor(obj: any);
    update: (obj: CANCEL_FLIGHT_PLAN_RESPONSE) => void;
    toJsonForSave: () => CANCEL_FLIGHT_PLAN_RESPONSE;
    toJsonForUI: () => CANCEL_FLIGHT_PLAN_RESPONSE;
    toJsonForDroneService: () => CANCEL_FLIGHT_PLAN_RESPONSE;
}
