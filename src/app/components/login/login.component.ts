import {Component} from '@angular/core';

import {AuthService} from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public constructor(private authService: AuthService) {
  }

  public doAuthenticate(): void {
    this.authService.authenticate();
  }
}
