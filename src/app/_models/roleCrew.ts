import { bonusModel } from './bonus';

export interface roleCrewModel
{
    name : string;
    singled : boolean;
    alignmentBonus: number;
    bonus: bonusModel[];
}