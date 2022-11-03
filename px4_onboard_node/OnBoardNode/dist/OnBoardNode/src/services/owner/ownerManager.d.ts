import { ASYNC_RESPONSE, REQUEST_OWNER } from "../../../../classes/typings/all.typings";
import { OWNER } from "../../../../classes/typings/ds.typings";
export declare class OwnerManager {
    private static instance;
    owner: OWNER;
    private constructor();
    setOwner: (owner: OWNER) => void;
    getOwner: () => OWNER;
    externalSetOwnerJoystick: (owner: REQUEST_OWNER) => Promise<ASYNC_RESPONSE>;
    queryToOffOwner: () => ASYNC_RESPONSE;
    static setOwner: (owner: OWNER) => void;
    static getOwner: () => OWNER;
    static externalSetOwnerJoystick: (owner: REQUEST_OWNER) => Promise<ASYNC_RESPONSE>;
    static queryToOffOwner: () => ASYNC_RESPONSE;
}
