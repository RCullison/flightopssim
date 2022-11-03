import { BaseVisionPattern } from './base_VisionPattern';
export declare class MissionVision extends BaseVisionPattern {
    visintSaveConfig: Object;
    constructor(data?: Object);
    update: (data: Object) => void;
    setValues: (data: any, saveConfig: Object) => void;
    toJson: () => void;
}
