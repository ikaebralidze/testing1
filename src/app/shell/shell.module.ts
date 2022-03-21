import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { SharedModule } from '../shared/shared.module';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonToggleModule,
    SharedModule,
  ],
  declarations: [HeaderComponent, PageNotFoundComponent],
  exports: [HeaderComponent],
})
export class ShellModule {}
