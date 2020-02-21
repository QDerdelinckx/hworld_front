import { skillModel } from './skill';
import { factionModel } from './faction';
import { roleCrewModel } from './roleCrew';

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
  roleCrew : roleCrewModel;
}