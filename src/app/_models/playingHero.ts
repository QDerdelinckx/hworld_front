import { skillModel } from './skill';
import { factionModel } from './faction';

export interface playingHeroModel {
  id: number;
  skin: string;
  name: string;
  description: string;
  level: number;
  strength: number;
  intelligence: number;
  charisma: number;
  luck: number;
  skills: skillModel[];
  faction: factionModel;
}