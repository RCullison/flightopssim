import { PARAMS_FIELDS_TYPE } from '../../typings/all.typings';
export declare class FlyTo {
    private lon;
    private lat;
    private height;
    private timestamp;
    constructor(data: any);
    update: (obj: any) => void;
    config: {
        lon: string;
        lat: string;
        height: string;
        timestamp: string;
    };
    toJson: () => Object;
    static getParams: () => {
        filed: string;
        type: PARAMS_FIELDS_TYPE;
    }[];
}
