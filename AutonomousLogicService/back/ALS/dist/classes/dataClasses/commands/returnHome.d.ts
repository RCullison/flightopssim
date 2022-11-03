import { PARAMS_FIELDS_TYPE } from '../../typings/all.typings';
export declare class ReturnHome {
    private point;
    private timestamp;
    constructor(data: any);
    update: (obj: any) => void;
    config: {
        point: string;
        timestamp: string;
    };
    toJson: () => Object;
    static getParams: () => {
        filed: string;
        type: PARAMS_FIELDS_TYPE;
    }[];
}
