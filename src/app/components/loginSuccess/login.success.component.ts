import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

import {AuthService} from 'src/app/services/auth.service';
import {NotificationService} from 'src/app/services/notification.service';

@Component({
  selector: 'app-login-success',
  templateUrl: './login.success.component.html',
})
export class LoginSuccessComponent implements OnInit {

  public isLoginSuccess: boolean = true;

  public constructor(
    private notificationService: NotificationService,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {
    this.notificationService.showLoadingSnackbar();
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      const error: Params = params['error'];

      if (error) {
        this.isLoginSuccess = false;

        this.notificationService.hideLoadingSnackbar();

        return;
      }

      const scope: Params = params['scope'];
      console.log(scope);
    });
  }

  public retry(): void {
    this.authService.authenticate();
  }
}