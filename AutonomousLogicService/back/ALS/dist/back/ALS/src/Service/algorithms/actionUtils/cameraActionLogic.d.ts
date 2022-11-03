import { IAction } from './iAction';
import { AutonomousAction } from '../../../../../../classes/dataClasses/security/autonomousAction';
import { ASYNC_RESPONSE, MAP, ACTION_ENVIRONMENTS } from '../../../../../../classes/typings/all.typings';
export declare class CameraActionLogic implements IAction {
    constructor();
    startAction: (environments: ACTION_ENVIRONMENTS, autonomousAction: AutonomousAction) => Promise<ASYNC_RESPONSE>;
    endAction: (environments: ACTION_ENVIRONMENTS, autonomousAction: AutonomousAction) => Promise<ASYNC_RESPONSE>;
    private startZoom;
    private stopZoom;
    actionConfig: MAP<{
        start: Function;
        stop: Function;
    }>;
    private log;
}
