import { TELEMETRY_SERVICE_DATA } from '../../../../../../classes/typings/ob-node-types';
import { I_FillLogic } from './I_FillLogic';
import { GeoPoint } from '../../../../../../classes/dataClasses/geo/geoPoint';
export declare class DgiFillLogic implements I_FillLogic {
    constructor();
    convertDroneData: (received: TELEMETRY_SERVICE_DATA) => {
        heading: number;
        velocities: {
            x: number;
            y: number;
            z: number;
        };
        velocity: number;
        location: GeoPoint;
        gps_health: number;
        height: any;
        last_change_time: number;
    };
    private gpsPositionToLocation;
    private calculateScalarVelocity;
}
