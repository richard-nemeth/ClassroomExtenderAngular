import {Component} from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-login-success',
  templateUrl: './login.success.component.html',
})
export class LoginSuccessComponent {

  public constructor(private notificationService: NotificationService) {
    this.notificationService.showLoadingSnackbar();
  }
}