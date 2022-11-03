import { MAP, NFZ_EXTERNAL, SYNC_USS_DATA_RESPONSE, USS } from '../../../../typings/all.typings';
export declare class SyncUssDataResponse {
    usses: MAP<USS>;
    nfz: MAP<NFZ_EXTERNAL>;
    config: {
        usses: string;
        nfz: string;
    };
    constructor(obj: any);
    update: (obj: SYNC_USS_DATA_RESPONSE) => void;
    toJsonForSave: () => SYNC_USS_DATA_RESPONSE;
    toJsonForUI: () => SYNC_USS_DATA_RESPONSE;
    toJsonForDroneService: () => SYNC_USS_DATA_RESPONSE;
}
