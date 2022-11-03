import { PERIMETER_DATA, POINT } from '../../typings/all.typings';
export declare class Perimeter {
    id: string;
    polygonPoints: POINT[];
    name: string;
    constructor(data?: any);
    private setId;
    private setPolygonPoints;
    private setName;
    setValues: (data: any, saveConfig?: Object) => void;
    update: (data: Object) => void;
    toJson: () => PERIMETER_DATA;
    saveConfig: {
        id: (data: any) => void;
        polygonPoints: (data: any) => void;
        name: (data: any) => void;
    };
}
