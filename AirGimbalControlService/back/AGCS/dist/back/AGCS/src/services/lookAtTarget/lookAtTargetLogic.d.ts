/// <reference types="node" />
import Timer = NodeJS.Timer;
export declare class LookAtTargetLogic {
    private static instance;
    computeGimbalInterval: Timer;
    private constructor();
    private startComputeGimbal;
    private stopComputeGimbal;
    private tryClearInterval;
    private LastSendGimbalCommandToSend;
    private computeGimbalCommands;
    private computeLookAtTargetCommandNewLogic;
    private computeDeltaHeightNewLogic;
    static startComputeGimbal: () => boolean;
    static stopComputeGimbal: () => boolean;
}
