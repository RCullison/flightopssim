import { ACTION_DROP_RESPONSE, ASYNC_RESPONSE, INPUT_COMMAND, MAP } from '../../../../../classes/typings/all.typings';
export declare class InputExternalManager {
    private static instance;
    externalInputArr: MAP[];
    maxExternalInputArrLength: number;
    private constructor();
    private init;
    private externalInput;
    private approvalAction;
    private installActionResult;
    private getExternalInputArr;
    private getMaxExternalInputArrLength;
    private setMaxExternalInputArrLength;
    static init: () => void;
    static externalInput: (data: ACTION_DROP_RESPONSE) => ASYNC_RESPONSE;
    static approvalAction: (data: INPUT_COMMAND) => ASYNC_RESPONSE;
    static installActionResult: (data: ASYNC_RESPONSE<ACTION_DROP_RESPONSE>) => ASYNC_RESPONSE;
    static getExternalInputArr: () => ASYNC_RESPONSE<MAP[]>;
    static getMaxExternalInputArrLength: () => ASYNC_RESPONSE<number>;
    static setMaxExternalInputArrLength: (maxNumber: {
        data: number;
    }) => ASYNC_RESPONSE<number>;
}
