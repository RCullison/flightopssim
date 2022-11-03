import { AIR_VEHICLE_ID, ALERTS_COLLISION_STYLES, COLLISION_NFZ_DATA, COLLISION_VEHICLE_DATA, MAPI_ALERT_TELEMETRY, MAPI_ALERT_TELEMETRY_UI } from '../../typings/all.typings';
import { ALERTS_TYPE } from '../../typings/enums';
export declare class AlertCollision {
    id: string;
    type: ALERTS_TYPE;
    airVehicleId: AIR_VEHICLE_ID;
    airVehicleName: string;
    alertData: {
        collisionWith: COLLISION_VEHICLE_DATA | COLLISION_NFZ_DATA;
        description: string;
    };
    styles: ALERTS_COLLISION_STYLES;
    config: {
        id: string;
        type: string;
        airVehicleId: string;
        airVehicleName: string;
        alertData: string;
        styles: string;
    };
    constructor(alert?: MAPI_ALERT_TELEMETRY);
    update: (obj: any) => void;
    updateModeDefine: (mdData: any) => void;
    toJsonForUI: () => MAPI_ALERT_TELEMETRY_UI;
}
