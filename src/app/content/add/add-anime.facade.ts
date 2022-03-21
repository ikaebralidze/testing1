import { Injectable } from '@angular/core';
import { Anime, AnimeOutput, Quote, QuotesResult } from '../models';
import { AnimeApiService } from '../services';
import { map, finalize } from 'rxjs/operators';
import { AddAnimeStorage } from './add-anime.storage';
import { AnimeBody, FORM_RESET_EVENT_KEY } from '../content.models';
import { FireApiService } from 'src/app/services/fire-api.service';
import { EventBusyService } from 'src/app/services/event-busy.service';

@Injectable()
export class AddAnimeFacade {
  get lastReserches(): string[] {
    return this.storage.lastThreeSearchs;
  }
  constructor(
    private AnimeApiService: AnimeApiService,
    private storage: AddAnimeStorage,
    private fireApiService: FireApiService,
    private eventBus$: EventBusyService
  ) {}
  fetchQuote(name: string) {
    return this.AnimeApiService.getQuotes(name).pipe(
      map((quote: any) => quote[0]),

      map<QuotesResult, Quote>((quoteObj) => ({
        Quote: quoteObj.quote,
        Character: quoteObj.character,
      }))
    );
  }
  fetchAnime(title: string) {
    return this.AnimeApiService.getAnime(title).pipe(
      map((anime: any) => {
        return anime.results[0];
      }),

      map<AnimeOutput, Anime>((anime) => ({
        Title: anime.title,
        Episodes: anime.episodes,
        Synopsis: anime.synopsis,
        Img_url: anime.image_url,
        mal_id: anime.mal_id,
      })),
      finalize(() => this.eventBus$.emit(FORM_RESET_EVENT_KEY))
    );
  }
  addLastSearchs(key: string) {
    this.storage.addLastSearchs(key);
  }
  restoreState() {
    this.storage.retoreState();
  }

  submit(body: AnimeBody) {
    this.AnimeApiService;
    this.fireApiService.AddAnime(body).subscribe((x) => console.log(x));
  }
}
