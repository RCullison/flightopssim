import { AIRWAYZ_ENTITY, MAP, NFZ_EXTERNAL, USS, USS_INFO } from '../../../../typings/all.typings';
export declare class Uss {
    entities: MAP<AIRWAYZ_ENTITY>;
    info: USS_INFO;
    description: any;
    nfzs: MAP<NFZ_EXTERNAL>;
    config: {
        entities: string;
        info: string;
        description: string;
    };
    constructor(obj: any);
    update: (obj: USS) => void;
    toJsonForSave: () => USS;
    toJsonForUI: () => USS;
    toJsonForDroneService: () => USS;
}
