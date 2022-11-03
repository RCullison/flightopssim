import { GIMBAL_MOVE } from '../../typings/all.typings';
export declare class GimbalMoveCommand {
    command: GIMBAL_MOVE;
    quantity: number;
    saveConfig: {
        command: string;
        quantity: string;
    };
    constructor(data: Object);
    setValues: (data: any, saveConfig?: Object) => void;
}
