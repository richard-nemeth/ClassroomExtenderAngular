import {Component} from '@angular/core';

import {LocalStorageService} from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  public isUserLoggedIn: boolean;

  public constructor(private localStorageService: LocalStorageService) {
    this.localStorageService.getStoredUserSubject().subscribe((isStoredUserSet: boolean) => {
      this.isUserLoggedIn = isStoredUserSet;
    });
  }
}