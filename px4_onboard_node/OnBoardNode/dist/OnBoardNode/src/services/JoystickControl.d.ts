import { CPP_force, JOYSTICK_CONTROL } from "../../../classes/typings/ob-node-types";
export declare class JoystickControl {
    private static instance;
    projConf: any;
    myObj: CPP_force;
    forceType: 'auto' | 'noGPS' | 'GPS';
    isSend0: boolean;
    private constructor();
    private listen;
    private updateForceType;
    private updateParams;
    private sending;
    private sendForce;
    static listen: (projConf: any) => void;
    static start: (params: JOYSTICK_CONTROL) => void;
    static updateParams: (params: JOYSTICK_CONTROL) => void;
    static updateForceType: (forceType: any) => void;
}
