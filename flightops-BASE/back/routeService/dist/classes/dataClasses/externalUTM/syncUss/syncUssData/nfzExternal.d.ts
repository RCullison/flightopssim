import { CTR_METADATA, NFZ_EXTERNAL, ZONE_POINT } from '../../../../typings/all.typings';
export declare class NfzExternal {
    id: string;
    name: string;
    height: number;
    polygon: Array<ZONE_POINT>;
    corridor: Array<ZONE_POINT>;
    circle: Array<ZONE_POINT>;
    type: string;
    expiration: string;
    timestamp: string;
    ctr: CTR_METADATA;
    config: {
        id: string;
        name: string;
        height: string;
        polygon: string;
        corridor: string;
        circle: string;
        type: string;
        expiration: string;
        timestamp: string;
        ctr: string;
    };
    constructor(obj: any);
    update: (obj: NFZ_EXTERNAL) => void;
    toJsonForSave: () => NFZ_EXTERNAL;
    toJsonForUI: () => NFZ_EXTERNAL;
    toJsonForDroneService: () => NFZ_EXTERNAL;
}
