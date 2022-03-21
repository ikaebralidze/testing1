import { Injectable } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Injectable()
export class AddAnimeStorage {
  lastThreeSearchs: string[] = [];
  constructor(private storage: StorageService) {}

  addLastSearchs(name: string) {
    if (this.lastThreeSearchs.length < 3) {
      this.lastThreeSearchs.unshift(name);
      this.storage.set<string[]>('lastThreeSearchs', this.lastThreeSearchs);
      return;
    }

    this.lastThreeSearchs = [name, ...this.lastThreeSearchs.slice(0, 2)];
    this.storage.set<string[]>('lastThreeSearchs', this.lastThreeSearchs);
  }

  retoreState() {
    const lastReserched = this.storage.get<string[]>('lastThreeSearchs');

    if (lastReserched && lastReserched?.length > 0) {
      this.lastThreeSearchs = lastReserched;
    }
  }
}
