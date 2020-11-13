import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import { RouteConstants } from '../constants/route.constants';

import {LocalStorageService} from './local-storage.service';

@Injectable()
export class AuthenticationService {
  
  public constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) {
  }

  public doLogout(): void {
    this.localStorageService.removeUserFromStorage();

    this.router.navigate([RouteConstants.REGISTRATION]);
  }
}