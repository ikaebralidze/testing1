import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from 'src/app/services';
import { EventBusyService } from 'src/app/services/event-busy.service';
import { AnimeBody, FORM_RESET_EVENT_KEY, RATING } from '../content.models';
import { Anime, Quote, Status } from '../models';
import { AddAnimeFacade } from './add-anime.facade';
import { AddAnimeStorage } from './add-anime.storage';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  providers: [AddAnimeFacade, AddAnimeStorage],
})
export class AddComponent implements OnInit, OnDestroy {
  form: FormGroup = new FormGroup({});
  formInvalid: boolean = true;
  searchInput: string = '';
  emptySearchError = false;
  selectedAnime$: Observable<Anime> | null = null;

  unsubscribe$ = new Subject();
  quoteSearchInput: string = '';
  searchQuote$: Observable<Quote> | null = null;
  emptyQuoteSearchError = false;
  subbmit = false;
  status = Status;
  get lastReserches(): string[] {
    return this.facade.lastReserches;
  }
  get rating() {
    return !!this.form.get('rating');
  }
  get ratings(): any {
    return RATING;
  }

  private formReset() {
    this.form.reset();

    this.form.updateValueAndValidity();

    this.subbmit = false;
    this.form.get('rewiew')?.setValue('');
    this.form.get('status')?.setValue(Status.WatchLater);
  }

  constructor(
    private facade: AddAnimeFacade,
    private fb: FormBuilder,
    private auth: AuthService,
    private eventBus: EventBusyService
  ) {}
  searchFromBadge(recent: string) {
    this.selectedAnime$ = this.facade.fetchAnime(recent);
  }
  search() {
    if (!this.searchInput) {
      this.emptySearchError = true;
      return;
    }
    this.emptySearchError = false;
    this.facade.addLastSearchs(this.searchInput);
    this.selectedAnime$ = this.facade.fetchAnime(this.searchInput);
  }
  quoteSearch() {
    if (!this.quoteSearchInput) {
      this.emptyQuoteSearchError = true;
      return;
    }
    this.emptyQuoteSearchError = false;
    this.searchQuote$ = this.facade.fetchQuote(this.quoteSearchInput);
  }

  submit(selectedAnime: Anime) {
    this.formInvalid = !this.form.invalid;
    this.subbmit = true;
    if (this.form.invalid) {
      return;
    }

    const value = this.form.value;

    const body: AnimeBody = {
      uid: this.auth.uid,
      rate: value.rating || '',
      rewiew: value.rewiew,
      status: value.status,
      mal_id: selectedAnime.mal_id,
    };

    this.facade.submit(body);
  }

  createNewForm() {
    this.form = this.fb.group({
      rewiew: ['', [Validators.required, Validators.minLength(16)]],
      status: '',
    });
  }

  private statusOnChange(status: Status) {
    switch (status) {
      case Status.Inprogress:
        this.form.addControl(
          'rating',
          new FormControl([1], Validators.required)
        );

        break;
      case Status.Watched:
        this.form.addControl(
          'rating',
          new FormControl([1], Validators.required)
        );

        break;
      case Status.WatchLater:
        this.form.removeControl('rating');

        break;
    }
  }
  ngOnInit() {
    this.createNewForm();
    this.facade.restoreState();

    this.form
      .get('status')
      ?.valueChanges.pipe(takeUntil(this.unsubscribe$))
      .subscribe((status) => {
        return this.statusOnChange(status);
      });

    this.eventBus
      .on(FORM_RESET_EVENT_KEY)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => this.formReset());
  }
  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
