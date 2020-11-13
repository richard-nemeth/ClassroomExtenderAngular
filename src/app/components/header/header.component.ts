import {Component} from '@angular/core';

import {AuthenticationService} from 'src/app/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public constructor(private authenticationService: AuthenticationService) {
  }

  public logout(): void {
    this.authenticationService.doLogout();
  }
}