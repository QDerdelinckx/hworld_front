import { episodeOptionModel } from './episodeOptionModel';

export interface episodeModel {
  id: number;
  story: string;
  episodeOptions: episodeOptionModel[];
}