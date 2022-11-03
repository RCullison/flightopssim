import { ASYNC_RESPONSE, OB_API_VALIDATION_BODY } from "../../../classes/typings/all.typings";
export declare class ValidationManager {
    private static instance;
    private validateObj;
    constructor();
    private loadSchemas;
    private validate;
    static validate: (key: OB_API_VALIDATION_BODY, data: any) => ASYNC_RESPONSE;
}
