import { REGISTER } from '../../../typings/all.typings';
export declare class RegisterData {
    apiKey: string;
    ussId: number;
    config: {
        apiKey: string;
        ussId: string;
    };
    constructor(register: any);
    update: (register: REGISTER) => void;
    toJsonForSave: () => REGISTER;
    toJsonForUI: () => REGISTER;
    toJsonForDroneService: () => REGISTER;
}
