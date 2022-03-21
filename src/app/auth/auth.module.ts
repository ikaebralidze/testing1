import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { authRoutingModule } from './auth-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SharedModule } from '../shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    authRoutingModule,
    MatFormFieldModule,
    SharedModule,
    FormsModule,
  ],
  declarations: [SignInComponent, SignUpComponent],
})
export class AuthModule {}
