import { ALGORITHM_STATUS, ASYNC_RESPONSE, TASK_TYPE } from "../../../../classes/typings/all.typings";
export interface IAlgorithm {
    taskType: TASK_TYPE;
    taskStatus: ALGORITHM_STATUS;
    routeData: any;
    start(): Promise<ASYNC_RESPONSE>;
    stop(): Promise<ASYNC_RESPONSE>;
    pause(): Promise<ASYNC_RESPONSE>;
    resume(): Promise<ASYNC_RESPONSE>;
    setParameters(data: any): boolean;
}
