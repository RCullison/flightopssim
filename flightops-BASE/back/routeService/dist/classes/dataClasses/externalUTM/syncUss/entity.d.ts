import { AIRWAYZ_ENTITY } from '../../../typings/all.typings';
import { EntityData } from './entityData';
export declare class Entity {
    id: number;
    data: EntityData;
    required: any;
    chat: string;
    config: {
        id: string;
        data: string;
        required: string;
        chat: string;
    };
    constructor(obj: any);
    update: (obj: AIRWAYZ_ENTITY) => void;
    toJsonForSave: () => AIRWAYZ_ENTITY;
    toJsonForUI: () => AIRWAYZ_ENTITY;
    toJsonForDroneService: () => AIRWAYZ_ENTITY;
}
