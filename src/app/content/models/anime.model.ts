export interface AnimeOutput {
  episodes: number;
  synopsis: string;
  title: string;
  mal_id: number;
  image_url: string;
}

export interface Anime {
  Title: string;
  Synopsis: string;
  Episodes: number;
  Img_url: string;
  mal_id: number;
}

export interface QuotesResult {
  anime: string;
  character: string;
  quote: string;
}

export interface Quote {
  Character: string;
  Quote: string;
}

export enum Status {
  Watched = 'Watched',
  WatchLater = 'WatchLater',
  Inprogress = 'WatchingNow',
}
