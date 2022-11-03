import { IModeDefine } from '../IModeDefine';
import { NFZ_DATA } from '../../typings/all.typings';
export declare class NfzMdLogic implements IModeDefine {
    constructor();
    validate(data: NFZ_DATA): any;
    private nfzBorderColorLogic;
    private nfzFillColorLogic;
}
