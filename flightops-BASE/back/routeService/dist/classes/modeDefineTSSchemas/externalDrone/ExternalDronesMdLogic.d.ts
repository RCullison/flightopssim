import { ExternalAirVehicle } from '../../dataClasses/airVehicle/externalAirVehicle';
import { IModeDefine } from '../IModeDefine';
export declare class ExternalDronesMdLogic implements IModeDefine {
    constructor();
    validate(drone: ExternalAirVehicle): any;
    private externalIconPngLogic;
    private droneIconColorLogic;
    private energyColorLogic;
    private borderIconStyle;
    private iconNoConnectStyle;
}
