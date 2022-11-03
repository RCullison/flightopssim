import { AlertCollision } from '../../dataClasses/alert/alertCollision';
import { IModeDefine } from '../IModeDefine';
export declare class AlertsMdLogic implements IModeDefine {
    constructor();
    validate(data: AlertCollision): any;
    private iconExternalUAVStyle;
    private locationExternalUAVLogic;
}
