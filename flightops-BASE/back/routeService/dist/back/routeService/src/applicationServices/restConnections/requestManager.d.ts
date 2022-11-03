import { ASYNC_RESPONSE, GEOPOINT, GEOPOINT3D } from '../../../../../classes/typings/all.typings';
import { AMS_API, SMS_API } from '../../../../../classes/dataClasses/api/api_enums';
export declare class RequestManager {
    static requestToWebService: (path: string, bodyObj?: Object) => Promise<ASYNC_RESPONSE>;
    static requestToAMS: (path: AMS_API, bodyObj?: Object) => Promise<ASYNC_RESPONSE>;
    static requestToOB: (path: string, bodyObj?: Object) => Promise<ASYNC_RESPONSE>;
    static requestToDTMSDivide: (path: string, bodyObj: GEOPOINT[]) => Promise<ASYNC_RESPONSE<GEOPOINT3D[]>>;
    static requestToSMS: (path: SMS_API, bodyObj: Object) => Promise<ASYNC_RESPONSE>;
    static requestToDTMS: (path: string, bodyObj: Object, timeout?: number) => Promise<ASYNC_RESPONSE<GEOPOINT3D[]>>;
    static sendRestRequest(url: string, path: string, bodyObj: Object, timeout_?: number): Promise<ASYNC_RESPONSE>;
}
