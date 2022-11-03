import { LOG_DATA_AFTER_PARSING, MAP, RANGE, USER_NOTE_AFTER_PARSING } from '../../typings/all.typings';
export declare class DataUtility {
    static setValues: (objForUpdate: any, data: any, saveConfig: Object) => void;
    static convertTo_CSV: (data: {
        logs: LOG_DATA_AFTER_PARSING[];
        userNotes: USER_NOTE_AFTER_PARSING[];
    }) => string;
    static generateID(): string;
    static checkIsNumber: (num: any) => boolean;
    static arrToMAP: (objArr: any[], fieldName: string) => MAP<any>;
    static arrStrToMapStr: (objArr: string[]) => MAP<string>;
    static mapToArr: (obj: MAP<any>) => any[];
    static mapMapToArr: (obj: MAP<MAP<any>>) => any[];
    static validConfigParams: (parameters: any[]) => boolean;
    static mapMapToMap: (obj: MAP<MAP<any>>) => MAP<any>;
    static mapMapToMap_secondId: (obj: MAP<MAP<any>>) => MAP<any>;
    static prepareTimeStamp: (date: any) => string;
    static millisecondsToHHMMSS: (time: number) => string;
    static hashCode: (str: string) => number;
    static getTimeString: () => string;
    static getTotalTimeString: (startTime: number, suf?: string) => string;
    static validateRANGE: (range: RANGE, divider?: number) => boolean;
}
