import { FINISH_SHOW_PARAMETERS, SYSTEM_STATUS, TASK_PROCESSING_APP, TASK_TYPE } from '../../typings/all.typings';
export declare class ProcessingAppTask {
    taskId: string;
    sensorId: string;
    name: string;
    systemStatus: SYSTEM_STATUS;
    type: TASK_TYPE;
    finishShowParameters: FINISH_SHOW_PARAMETERS;
    styles: {
        color: 'yellow';
        fillColor: 'transparent';
        colorStatusAV: 'blue';
    };
    constructor(data: TASK_PROCESSING_APP);
    saveConfig: {
        taskId: string;
        sensorId: string;
        name: string;
        systemStatus: string;
        type: string;
        finishShowParameters: string;
    };
    update: (data: Object) => {
        taskId: string;
        sensorId: string;
        name: string;
        systemStatus: SYSTEM_STATUS;
        type: TASK_TYPE;
        finishShowParameters: FINISH_SHOW_PARAMETERS;
        styles: {
            color: 'yellow';
            fillColor: 'transparent';
            colorStatusAV: 'blue';
        };
    };
    updateModeDefine(task: any, mdData: any): void;
    toJsonForUI: () => {
        taskId: string;
        sensorId: string;
        name: string;
        systemStatus: SYSTEM_STATUS;
        type: TASK_TYPE;
        finishShowParameters: FINISH_SHOW_PARAMETERS;
        styles: {
            color: 'yellow';
            fillColor: 'transparent';
            colorStatusAV: 'blue';
        };
    };
}
