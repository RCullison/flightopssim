import { ASYNC_RESPONSE, MAP } from "../../../../classes/typings/all.typings";
import { AGCS_API, gimbalGW_Service_API, LandingService_API } from "../../../../classes/dataClasses/api/api_enums";
export declare class RequestManager {
    static externalServiceURLs: MAP<string>;
    static requestGimbalGWService: (path: gimbalGW_Service_API, bodyObj: Object) => Promise<ASYNC_RESPONSE>;
    static requestAGCS: (path: AGCS_API, bodyObj: Object) => Promise<ASYNC_RESPONSE>;
    static requestToChimera: (path: string, bodyObj: Object) => Promise<ASYNC_RESPONSE>;
    static requestLandingService: (path: LandingService_API, bodyObj: Object) => Promise<ASYNC_RESPONSE>;
    static sendRestRequestPromise(url: string, path: string, bodyObj: Object): Promise<ASYNC_RESPONSE>;
    static validURL: (string: any) => boolean;
    static sendRestRequest(url: any, path: string, bodyObj: Object): Promise<unknown>;
}
