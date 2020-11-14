import {Component, OnInit} from '@angular/core';

import {AuthenticationService} from 'src/app/services/authentication.service';
import {LocalStorageService} from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  public isUserLoggedIn: boolean = false;

  public constructor(
    private authenticationService: AuthenticationService,
    private localStorageService: LocalStorageService
  ) {

  }

  ngOnInit(): void {
    this.localStorageService.getisUserLoggedInSubject().subscribe((isUserLoggedIn: boolean) => {
      this.isUserLoggedIn = isUserLoggedIn;
    });
  }

  public logout(): void {
    this.authenticationService.doLogout();
  }
}