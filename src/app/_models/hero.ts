import { skillModel } from './skill';
import { factionModel } from './faction';

export interface heroModel{
    id: number;
    name: string;
    skin: string;
    description: string;
    level: number;
    strength: number;
    intelligence: number;
    charisma: number;
    luck: number;
    skills: skillModel[];
    faction: factionModel;
}