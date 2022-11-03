import { BOOLEAN_NUMBER, POINT, SITE_ROUTE_SERVICE } from '../../typings/all.typings';
export declare class SiteMatrix {
    northWest: POINT;
    matrixNFZSafetyFactor: boolean[][];
    matrixNFZSafetyFactor_external: BOOLEAN_NUMBER[][];
    flyPolygon: any;
    inverseFlyPolygon: any;
    cellSize: [number, number];
    id: number;
    saveConfig: {
        northWest: string;
        matrixNFZSafetyFactor: string;
        cellSize: string;
        flyPolygon: string;
        inverseFlyPolygon: string;
        id: string;
    };
    constructor(data?: any);
    setValues: (data: any, saveConfig?: Object) => void;
    update: (data: SITE_ROUTE_SERVICE) => void;
    toJsonForRouteService: () => SITE_ROUTE_SERVICE;
}
