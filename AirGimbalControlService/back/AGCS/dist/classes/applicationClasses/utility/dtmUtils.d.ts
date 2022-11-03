import { ASYNC_RESPONSE, FROM_TO, GEOPOINT, GEOPOINT3D, POINT_ON_PATH_FOR_AGL } from '../../typings/all.typings';
export declare class DtmUtils {
    private static instance;
    private constructor();
    private fixPointParameters;
    private divideByMaxPoints;
    static fixPointParameters: (pathForCompute: POINT_ON_PATH_FOR_AGL[], pairsPoints: FROM_TO<POINT_ON_PATH_FOR_AGL>) => void;
    static divideByMaxPoints: (geopoints: GEOPOINT[], requestToDTMS: Function) => Promise<ASYNC_RESPONSE<GEOPOINT3D[]>>;
}
