import { VALIDATION_OBJ } from '../typings/all.typings';
export declare class ValidClass {
    createInstanceConfig: any;
    validObj: VALIDATION_OBJ;
    constructor();
    validate(data: any): void;
    createArray(data: any, validClass: any, key: any): VALIDATION_OBJ;
    createClass(data: any, validClass: any): VALIDATION_OBJ;
    fillCreateInstancesConfig: any;
}
