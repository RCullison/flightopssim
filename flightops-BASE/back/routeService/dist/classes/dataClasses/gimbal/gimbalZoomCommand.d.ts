import { GIMBAL_ZOOM } from '../../typings/all.typings';
export declare class GimbalZoomCommand {
    command: GIMBAL_ZOOM;
    quantity: number;
    saveConfig: {
        command: string;
        quantity: string;
    };
    constructor(data: Object);
    setValues: (data: any, saveConfig?: Object) => void;
}
