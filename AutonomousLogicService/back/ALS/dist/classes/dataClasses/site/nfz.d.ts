import { NFZ_DATA, NFZ_TYPE, POINT } from '../../typings/all.typings';
export declare class Nfz {
    id: string;
    polygonPoints: POINT[];
    maxAlt: number;
    isLimitAlt: boolean;
    name: string;
    allowedId: string;
    type: NFZ_TYPE;
    constructor(data?: NFZ_DATA);
    private setId;
    private setPolygonPoints;
    private setMaxAlt;
    private setIsLimitAlt;
    private setName;
    private setAllowedId;
    private setType;
    setValues: (data: Partial<NFZ_DATA>, saveConfig?: Object) => void;
    updateModeDefine(drone: any, mdData: any): void;
    update: (data: Partial<NFZ_DATA>) => void;
    toJsonForSave: () => NFZ_DATA;
    saveConfig: {
        id: (data: any) => void;
        polygonPoints: (data: any) => void;
        maxAlt: (data: number) => void;
        isLimitAlt: (data: boolean) => void;
        name: (data: string) => void;
        allowedId: (data: string) => void;
        type: (data: NFZ_TYPE) => void;
        styles: any;
    };
}
