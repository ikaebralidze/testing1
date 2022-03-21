import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { ListsComponent } from './lists/lists.component';
import { contentRoutingModule } from './content-routing.module';
import { AddComponent } from './add/add.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AnimeApiService } from './services/anime-api.service';
import { ListItemComponent } from './lists/list-item/list-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    contentRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ContentComponent,
    ListsComponent,
    AddComponent,
    ListItemComponent,
  ],
  providers: [AnimeApiService],
})
export class ContentModule {}
