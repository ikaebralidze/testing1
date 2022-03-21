import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ListsComponent } from './lists/lists.component';

const routes: Routes = [
  { path: '', component: ListsComponent },
  {
    path: 'lists',
    component: ListsComponent,
  },
  {
    path: 'add',
    component: AddComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class contentRoutingModule {}
