import { AnimeOutput, Status } from './models/anime.model';

export const RATING = [1, 2, 3, 4, 5];

export interface AnimeBody {
  uid: string | null | undefined;
  mal_id: number;
  rate: number;
  rewiew: string;
  status: Status;
}

export const FORM_RESET_EVENT_KEY = 'FORM_RESET';

export type AnimeWithId = AnimeBody & { id: string };

export interface AnimeListItems {
  data: AnimeWithId;
  anime: AnimeOutput;
}
