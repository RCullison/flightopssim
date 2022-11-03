import { GEOJSON_POINT } from "../../typings/all.typings";
export declare class ObservationPointUi {
    id: string;
    name: string;
    priority: number;
    location: GEOJSON_POINT;
    styles: {
        icon: string;
        shadow: string;
        textColor: string;
        textFontSize: string;
    };
    constructor(_observationPoint: Object);
    updatePriority: (Priority: number) => boolean;
    static generateID(): string;
}
