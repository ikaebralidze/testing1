import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '.';
import { AnimeBody, AnimeWithId } from '../content/content.models';

@Injectable({
  providedIn: 'root',
})
export class FireApiService {
  constructor(private store: AngularFirestore, private auth: AuthService) {}

  AddAnime(body: AnimeBody) {
    return from(this.store.collection('content').add(body));
  }

  getAnime(): Observable<AnimeWithId[]> {
    return this.store
      .collection<AnimeBody>('content', (ref) =>
        ref.where('uid', '==', this.auth.uid)
      )
      .get()
      .pipe(map((res) => res.docs.map((d) => ({ ...d.data(), id: d.id }))));
  }
}
