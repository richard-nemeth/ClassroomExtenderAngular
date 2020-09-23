import {Component} from '@angular/core';

import {RootService} from 'src/app/services/root.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public rootBackendMessage: any;

  public constructor(private rootService: RootService) {
    this.setRootBackendMessage();
  }

  private async setRootBackendMessage() {
    this.rootBackendMessage = await this.rootService.getRootMessage();
  }
}
