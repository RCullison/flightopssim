import { HOT_POINT_PARAMETERS, ZERO_ONE } from '../../../typings/class.typings';
export declare class BaseCommintPattern {
    set hotPointParameters(value: HOT_POINT_PARAMETERS);
    get hotPointParameters(): HOT_POINT_PARAMETERS;
    protected _hotPointParameters: HOT_POINT_PARAMETERS;
    latitude: number;
    longitude: number;
    altitude: number;
    radius: number;
    angular_speed: number;
    is_clockwise: ZERO_ONE;
    start_point: number;
    yaw_mode: ZERO_ONE;
    base_commintSaveConfig: {
        hotPointParameters: string;
        latitude: string;
        longitude: string;
        altitude: string;
        radius: string;
        angular_speed: string;
        is_clockwise: string;
        start_point: string;
        yaw_mode: string;
    };
    constructor(data: Partial<HOT_POINT_PARAMETERS>);
    protected baseUpdate: (data?: Object) => void;
    setValues: (data: any, saveConfig: Object) => void;
    toJson: Function;
}
