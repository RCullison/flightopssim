import { SENSOR_STATUS } from '../../typings/class.typings';
import { GeoPoint } from '../geo/geoPoint';
import { ID_TYPE } from '../../typings/all.typings';
export declare class Sensor {
    sensorId: ID_TYPE;
    status: SENSOR_STATUS;
    sensorLocation: GeoPoint;
    errorDescription: string;
    severity: string;
    sensorType: string;
    videoURL: string;
    FOV: number;
    setValues: (data: any, saveConfig: Object) => void;
    sensorSaveConfig: {
        sensorId: string;
        status: string;
        sensorLocation: string;
        errorDescription: string;
        severity: string;
        sensorType: string;
        videoURL: string;
        FOV: string;
    };
    constructor(_target: Object);
    update: (data: Object) => void;
}
