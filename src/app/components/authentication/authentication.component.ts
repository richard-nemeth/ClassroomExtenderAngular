import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {RegistrationService} from 'src/app/services/registration.service';
import {LocalStorageService} from 'src/app/services/local-storage.service';

import {RouteConstants} from 'src/app/constants/route.constants';
import {AuthenticationService} from 'src/app/services/authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html'
})
export class AuthenticationComponent {

  public constructor(
    private registrationService: RegistrationService,
    private router: Router,
    private storageService: LocalStorageService,
    private authenticationService: AuthenticationService
  ) {
    this.redirectIfUserRegistrated();
  }

  public doAuthentication(): void {
    this.authenticationService.startAuthentication();
  }

  private redirectIfUserRegistrated(): void {
    if (this.storageService.getUserFromStorage() !== null) {
      this.router.navigate([RouteConstants.HOME]);
    }
  }
}
