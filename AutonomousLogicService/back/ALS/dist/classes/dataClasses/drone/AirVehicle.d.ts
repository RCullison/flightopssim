import { GeoPoint } from '../geo/geoPoint';
import { CARTESIAN3, WAYPOINT_STATUS } from "../../typings/all.typings";
export declare class AirVehicle {
    id: string;
    ip: string;
    type: string;
    sensorType: any;
    missionType: any;
    callSign: string;
    sensorId: number;
    name: string;
    energy: number;
    energyConsumption: number;
    location: GeoPoint;
    heading: number;
    showVideo: boolean;
    videoStreamIP: string;
    homePoint: GeoPoint;
    operationalAlt: number;
    status: any;
    height: number;
    timeLeft: number;
    state: any;
    currentStatusTimeStart: number;
    extControl: any;
    distanceFromHome: number;
    replaced: boolean;
    gps_health: number;
    attitude: any;
    imu: any;
    velocity: number;
    computedVelocity: number;
    velocities: CARTESIAN3;
    loiterSlowed: boolean;
    waypointsPatternStatus: WAYPOINT_STATUS;
    wayPoints: any;
    namespace: any;
    isArmed: any;
    droneModel: string;
    velocityAzimuth: any;
    config: {
        ip: string;
        id: string;
        sensorType: string;
        missionType: string;
        callSign: string;
        name: string;
        namespace: string;
        type: string;
        isExist: string;
        operationalAlt: string;
        maxVelocity: string;
        maxDeltaVelocityUp: string;
        maxDeltaVelocityDown: string;
        'maxYawVelocity ': string;
        'failSafe.RHBat': string;
        'failSafe.LandBat': string;
        'failSafe.EmergencyLandHeight': string;
        sensorId: string;
        minPitch: string;
        maxPitch: string;
        extControl: string;
        energy: string;
        energyConsumption: string;
        velocity: string;
        computedVelocity: string;
        velocities: string;
        location: string;
        gps_health: string;
        height: string;
        attitude: string;
        imu: string;
        connectivity: string;
        onBoard: string;
        flytBase: string;
        network: string;
        heading: string;
        distanceFromHome: string;
        homePoint: string;
        missionLineTo: string;
        isArmed: string;
        loiterPatternStatus: string;
        loiterSlowed: string;
        waypointsPatternStatus: string;
        owner: string;
        corridor: string;
        minAltitude: string;
        maxAltitude: string;
        availableSlots: string;
        wayPoints: string;
        energyForReturnHome: string;
        flyStatus: string;
        droneModel: string;
        gimbal: string;
        sensorVector: string;
        returnHomeVelocity: string;
        last_change_time: string;
        localLast_change_time: string;
        velocityAzimuth: string;
        extrapolationLocation: string;
        location_ELS: string;
        gimbalPitch: string;
        gimbalYaw: string;
    };
    constructor(drone: any);
    update: (obj: any) => void;
    updateModeDefine(drone: any, mdData: any): void;
    toJsonForUI: () => {
        id: string;
        ip: string;
        name: string;
        sensorId: number;
        energy: number;
        location: GeoPoint;
        heading: number;
        showVideo: boolean;
        videoStreamIP: string;
        homePoint: GeoPoint;
        operationalAlt: number;
        status: any;
        height: number;
        distanceFromHome: number;
        gps_health: number;
        velocity: number;
        computedVelocity: number;
    };
    toJsonForTestMonitoring: () => Object;
    positionForTestMonitoring: () => Object;
}
