import { AIRWAYZ_ENTITY, MAP, SYNC_USS_DATA } from '../../../../typings/all.typings';
export declare class SyncUssData {
    time: string;
    entities: MAP<AIRWAYZ_ENTITY>;
    config: {
        time: string;
        entities: string;
    };
    constructor(obj: any);
    update: (obj: SYNC_USS_DATA) => void;
    toJsonForSave: () => SYNC_USS_DATA;
    toJsonForUI: () => SYNC_USS_DATA;
    toJsonForDroneService: () => SYNC_USS_DATA;
}
