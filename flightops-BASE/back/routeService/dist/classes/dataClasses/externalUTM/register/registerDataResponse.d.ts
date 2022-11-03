import { REGISTER_RESPONSE } from '../../../typings/all.typings';
export declare class RegisterDataResponse {
    token: string;
    time: string;
    expire: string;
    config: {
        token: string;
        time: string;
        expire: string;
    };
    constructor(obj: any);
    update: (obj: REGISTER_RESPONSE) => void;
    toJsonForSave: () => REGISTER_RESPONSE;
    toJsonForUI: () => REGISTER_RESPONSE;
    toJsonForDroneService: () => REGISTER_RESPONSE;
}
