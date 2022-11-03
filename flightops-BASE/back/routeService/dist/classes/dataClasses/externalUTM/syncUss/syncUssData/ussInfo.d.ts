import { USS_INFO } from '../../../../typings/all.typings';
export declare class UssInfo {
    lastUpdateTime: Date;
    state: string;
    config: {
        lastUpdateTime: string;
        state: string;
    };
    constructor(obj: any);
    update: (obj: USS_INFO) => void;
    toJsonForSave: () => USS_INFO;
    toJsonForUI: () => USS_INFO;
    toJsonForDroneService: () => USS_INFO;
}
