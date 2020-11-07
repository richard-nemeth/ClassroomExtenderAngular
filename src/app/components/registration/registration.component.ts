import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {RegistrationService} from 'src/app/services/registration.service';
import {LocalStorageService} from 'src/app/services/local-storage.service';
import { RouteConstants } from 'src/app/constants/route.constants';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html'
})
export class RegistrationComponent {

  public constructor(
    private registrationService: RegistrationService,
    private router: Router,
    private storageService: LocalStorageService
  ) {
    this.redirectIfUserRegistrated();
  }

  public doRegistration(): void {
    this.registrationService.startRegistration();
  }

  private redirectIfUserRegistrated(): void {
    if (this.storageService.getUserFromStorage() !== null) {
      this.router.navigate([RouteConstants.HOME]);
    }
  }
}
