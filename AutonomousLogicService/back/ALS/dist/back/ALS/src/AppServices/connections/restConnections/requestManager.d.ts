import { ASYNC_RESPONSE } from '../../../../../../classes/typings/all.typings';
import { OB_API, ExternalService_API } from '../../../../../../classes/dataClasses/api/api_enums';
export declare class RequestManager {
    static requestToOnBoard: (path: OB_API, bodyObj: Object) => Promise<ASYNC_RESPONSE>;
    static requestToExternalServer: (path: ExternalService_API, bodyObj: Object) => Promise<ASYNC_RESPONSE>;
    static sendRestRequest(url: string, path: string, bodyObj: Object): Promise<ASYNC_RESPONSE>;
    static validURL: (string: any) => boolean;
}
