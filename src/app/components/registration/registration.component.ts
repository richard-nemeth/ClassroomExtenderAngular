import {Component} from '@angular/core';

import {RegistrationService} from 'src/app/services/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html'
})
export class RegistrationComponent {

  public constructor(private registrationService: RegistrationService) {
  }

  public doRegistration(): void {
    this.registrationService.startRegistration();
  }
}
