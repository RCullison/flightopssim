import { ACCURATE_VISUAL_LANDING, NORMAL_LANDING, VISUAL_LANDING } from "../../../../classes/typings/all.typings";
export declare class CommonMethods4Landing {
    private static instance;
    private projConf;
    private init;
    private validateAccurateLandParams;
    private params4ValidHomePosition;
    private validateLandingTypeNormal;
    private validateLandingTypeAccurate;
    private validateLandingTypeOptic;
    private commonLandingValidateAndSetFields;
    private landingVisual;
    static init: (projConf: any) => void;
    static validateAccurateLandParams: (obj_: ACCURATE_VISUAL_LANDING) => ACCURATE_VISUAL_LANDING;
    static params4ValidHomePosition: () => ACCURATE_VISUAL_LANDING;
    static validateLandingTypeNormal: (obj: any) => boolean;
    static validateLandingTypeAccurate: (obj: any) => boolean;
    static validateLandingTypeOptic: (obj: any) => boolean;
    static commonLandingValidateAndSetFields: (obj: NORMAL_LANDING | VISUAL_LANDING | ACCURATE_VISUAL_LANDING) => ACCURATE_VISUAL_LANDING;
    static landingVisual: () => Promise<unknown>;
}
