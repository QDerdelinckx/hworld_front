import { bonusModel } from './bonus';

export interface itemModel{
    id: number;
    name: string;
    skin: string;
    bonuses: bonusModel[];
}