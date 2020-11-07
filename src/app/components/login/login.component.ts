import {Component} from '@angular/core';

import {AuthService} from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  public constructor(private authService: AuthService) {
  }

  public doAuthenticate(): void {
    this.authService.authenticate();
  }
}
