import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FireApiService } from 'src/app/services/fire-api.service';
import { AnimeListItems } from '../../content.models';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent implements OnInit {
  @Input() item: AnimeListItems | undefined;

  details: boolean = false;
  constructor(private fireApiService: FireApiService, private router: Router) {}
  goToDetails() {
    this.details = true;
  }
  ngOnInit() {}
}
