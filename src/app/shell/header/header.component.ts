import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  get isLogedIn(): boolean {
    return this.auth.isLoggedIn;
  }

  // get isInitiated(): boolean {
  //   // return this.auth.isInitiated;
  // }

  get isEn() {
    return this.isLanguageActive('en');
  }

  get isKa() {
    return this.isLanguageActive('ka');
  }

  constructor(
    private translateService: TranslateService,
    private router: Router,
    private auth: AuthService
  ) {}

  isLanguageActive(lang: string): boolean {
    const defaultLang = this.translateService.defaultLang;
    const currentLang = this.translateService.currentLang;

    return currentLang ? currentLang !== lang : defaultLang === lang;
  }

  toEn() {
    this.translateService.setDefaultLang('en');
  }

  toKa() {
    this.translateService.setDefaultLang('ka');
  }

  toSignUp() {
    this.router.navigate(['signup']);
  }

  toSignIn() {
    this.router.navigate(['signin']);
  }

  signOut() {
    this.auth.signOut().then(() => this.router.navigate(['']));
  }
  ngOnInit() {}
}
