import {Component} from '@angular/core';

import {AuthService} from 'src/app/services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html'
})
export class RegistrationComponent {

  public constructor(private authService: AuthService) {
  }

  public doAuthenticate(): void {
    this.authService.authenticate();
  }
}
