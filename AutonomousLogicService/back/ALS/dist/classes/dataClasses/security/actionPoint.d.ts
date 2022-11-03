import { AutonomousAction } from './autonomousAction';
import { GEOPOINT3D_SHORT, HEADING_TYPE, REL_TYPE, AUTONOMOUS_POINT } from '../../typings/all.typings';
export declare class ActionPoint {
    id: string;
    geoPoint: GEOPOINT3D_SHORT;
    relativeAlt: number;
    relativeHeadingType: REL_TYPE;
    heading: number;
    headingType: HEADING_TYPE;
    velocity: number;
    POI: {
        geoPoint: GEOPOINT3D_SHORT;
        relativeAlt: number;
    };
    actions: AutonomousAction[];
    constructor(data?: Partial<AUTONOMOUS_POINT>);
    update: (data: Object) => void;
    private saveActions;
    private saveConfig;
    private functionSaveConfig;
    private getActions;
    toJsonForSave: () => AUTONOMOUS_POINT;
    toJsonForUI: () => AUTONOMOUS_POINT;
    toJsonForDroneService: () => AUTONOMOUS_POINT;
}
