import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { FireApiService } from 'src/app/services/fire-api.service';
import { AnimeListItems, AnimeWithId } from '../content.models';
import { AnimeApiService } from '../services';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent implements OnInit {
  anime$: Observable<AnimeListItems[]> | undefined;
  constructor(
    private fireApiService: FireApiService,
    private animeApiService: AnimeApiService
  ) {}
  private mapAnimeData(data: AnimeWithId[]) {
    return data.map((d) =>
      this.animeApiService.getAnimeByMal_id(d.mal_id).pipe(
        map<any, AnimeListItems>((anime) => ({
          data: d,
          anime,
        }))
      )
    );
  }

  ngOnInit() {
    this.anime$ = this.fireApiService
      .getAnime()
      .pipe(switchMap((data) => forkJoin(this.mapAnimeData(data))));
  }
}
