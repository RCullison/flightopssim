import { ASYNC_RESPONSE, IR_LOCK_ACTION_PARAMETERS, IR_LOCK_STATUS, STATUS } from '../../../../classes/typings/all.typings';
export declare class IrLockManager {
    private static instance;
    irLockStatus: IR_LOCK_STATUS;
    private getIrStatus;
    private startIrLock;
    private stopIrLock;
    private dropPackage;
    static startIrLock: (irParameters: IR_LOCK_ACTION_PARAMETERS) => Promise<ASYNC_RESPONSE<STATUS<IR_LOCK_STATUS>>>;
    static stopIrLock: () => Promise<ASYNC_RESPONSE<STATUS<IR_LOCK_STATUS>>>;
    static getIrStatus: () => IR_LOCK_STATUS;
    static dropPackage: (servoData: {
        servoNumber: number;
        PWM: number;
    }) => Promise<ASYNC_RESPONSE>;
}
