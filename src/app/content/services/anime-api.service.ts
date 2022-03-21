import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AnimeOutput, Quote } from '../models';

@Injectable()
export class AnimeApiService {
  constructor(private http: HttpClient) {}
  getAnime(title: string) {
    return this.http.get<AnimeOutput>(`${environment.animeAPI}${title}`);
  }
  getQuotes(name: string) {
    return this.http.get<Quote>(`${environment.animeQuotes}${name}`);
  }

  getAnimeByMal_id(id: number) {
    return this.http.get(`https://api.jikan.moe/v3/anime/${id}`);
  }
}
