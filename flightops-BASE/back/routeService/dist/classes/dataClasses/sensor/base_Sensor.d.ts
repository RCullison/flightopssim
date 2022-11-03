import { SENSOR_SEVERITY, SENSOR_STATUS } from '../../typings/class.typings';
import { GeoPoint } from '../geo/geoPoint';
import { SENSOR_ID_TYPE } from "../../typings/all.typings";
export declare class Base_Sensor {
    sensorId: SENSOR_ID_TYPE;
    Status: SENSOR_STATUS;
    ErrorDescription: string;
    Severity: SENSOR_SEVERITY;
    SensorLocation: GeoPoint;
    base_sensorSaveConfig: {
        SensorId: string;
        Status: string;
        ErrorDescription: string;
        Severity: string;
        SensorLocation: string;
    };
    constructor(data?: Object);
    baseUpdate(data?: Object): void;
    setValues: Function;
    toJson: Function;
}
