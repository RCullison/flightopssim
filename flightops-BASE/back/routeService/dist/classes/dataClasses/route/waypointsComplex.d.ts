import { ACTION_ON_ROUTE_END, ID_TYPE, POINT, POINT3D, ROUTE_DATA_FOR_FCS, ROUTE_DATA_FOR_ONBOARD, ROUTE_DATA_FOR_UTM, ROUTE_DATA_UI, UPDATE_ROUTE_DATA, YAW_MODE } from '../../typings/all.typings';
import { PointOfRoute } from './pointOfRoute';
export declare class WaypointsComplex {
    config: {
        isForce: {
            type: string;
            objType: string;
            default: boolean;
            required: boolean;
        };
        action_on_finish: {
            type: string;
            objType: string;
            default: number;
            required: boolean;
            min: number;
        };
        action_on_rc_lost: {
            type: string;
            objType: string;
            default: number;
            required: boolean;
            min: number;
        };
        gimbal_pitch_mode: {
            type: string;
            objType: string;
            default: number;
            required: boolean;
            min: number;
        };
        idle_velocity: {
            type: string;
            objType: string;
            default: any;
            required: boolean;
            min: number;
        };
        mission_exec_times: {
            type: string;
            objType: string;
            default: number;
            required: boolean;
            min: number;
        };
        damping_distance: {
            type: string;
            objType: string;
            default: number;
            required: boolean;
            min: number;
        };
        target_gimbal_pitch: {
            type: string;
            objType: string;
            default: number;
            required: boolean;
            min: number;
        };
        turn_mode: {
            type: string;
            objType: string;
            default: number;
            required: boolean;
            min: number;
        };
        has_action: {
            type: string;
            objType: string;
            default: number;
            required: boolean;
            min: number;
        };
        action_time_limit: {
            type: string;
            objType: string;
            default: number;
            required: boolean;
            min: number;
        };
        action_repeat: {
            type: string;
            objType: string;
            default: number;
            required: boolean;
            min: number;
        };
        trace_mode: {
            type: string;
            objType: string;
            default: number;
            required: boolean;
            min: number;
        };
        velocity_range: {
            type: string;
            objType: string;
            default: any;
            required: boolean;
            min: number;
        };
        yaw_mode: {
            type: string;
            objType: string;
            default: YAW_MODE;
            required: boolean;
            min: number;
        };
        points: {
            type: string;
            objType: typeof PointOfRoute;
            default: any[];
            required: boolean;
            min: number;
        };
    };
    id: string;
    isForce: false;
    action_on_finish: number;
    action_on_rc_lost: number;
    gimbal_pitch_mode: number;
    idle_velocity: number;
    mission_exec_times: number;
    damping_distance: number;
    target_gimbal_pitch: number;
    turn_mode: number;
    has_action: number;
    action_time_limit: number;
    action_repeat: number;
    trace_mode: number;
    velocity_range: number;
    yaw_mode: number;
    endOfRoutePattern: ACTION_ON_ROUTE_END;
    AltFromDrone: boolean;
    points: PointOfRoute[];
    private isApproval;
    missionFlightId: any;
    isCheckedUTM: boolean;
    cutStaticPath: POINT3D[];
    version: number;
    constructor(id: ID_TYPE);
    saveConfig: {
        id: string;
        version: string;
        isForce: string;
        longitude: string;
        latitude: string;
        altitude: string;
        velocity: string;
        yaw: string;
        yaw_mode: string;
        isApproval: string;
        isCheckedUTM: string;
    };
    setValues: (data: any, saveConfig: Object) => void;
    updateRoutePoints: (data: UPDATE_ROUTE_DATA) => void;
    updatePoints: (data: UPDATE_ROUTE_DATA) => void;
    updateVersion: (data: any) => void;
    updateActionOnRouteEnd: (data: any) => void;
    updateAltFromDrone: (data: any) => void;
    updateYaw_mode: (data: any) => void;
    updateCutStaticPath: (data: any) => void;
    private saveConfigFromExternalSource;
    private pointsToJson;
    toJsonForUI: () => ROUTE_DATA_UI;
    toJsonForDroneService: () => ROUTE_DATA_FOR_FCS;
    toJsonForOnboard: () => ROUTE_DATA_FOR_ONBOARD;
    toJsonForUtm: (droneId: string, droneName: string) => ROUTE_DATA_FOR_UTM;
    getRoute_POINT_Arr: () => POINT[];
    getRoute_POINT3D_Arr: () => POINT3D[];
}
