import { NOTIFICATION_TYPE } from '../../typings/ws-ui.typings';
import { EMITTER, MESSAGE_UI, MESSAGE_UI_STYLES } from '../../typings/all.typings';
export declare class MessageData {
    emitter?: EMITTER;
    type: NOTIFICATION_TYPE;
    message: string;
    title: string;
    date: number;
    dates: number[];
    count: number;
    styles: MESSAGE_UI_STYLES;
    tecnicalStatusesSaveConfig: {
        emitter: string;
        type: string;
        message: string;
        title: string;
        date: string;
        count: string;
        styles: string;
        'styles.titleColor': string;
        'styles.messageColor': string;
    };
    constructor(_data?: Object);
    setValues: (data: any, saveConfig: Object) => void;
    update: (data: Object) => void;
    private updateColors;
    toJsonForUI: () => MESSAGE_UI;
}
