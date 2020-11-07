import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

import {AuthService} from 'src/app/services/auth.service';
import {NotificationService} from 'src/app/services/notification.service';

@Component({
  selector: 'app-login-success',
  templateUrl: './login.success.component.html',
})
export class RegistrationSuccessComponent implements OnInit {

  public isLoginSuccess: boolean = true;
  public areScopesPresent: boolean = true;

  public constructor(
    private notificationService: NotificationService,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {
    this.notificationService.showLoadingSnackbar();
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.validateError(params);
      
      if(this.isLoginSuccess) {
        this.validateScopes(params);
      }
    });
  }

  public retry(): void {
    this.authService.authenticate();
  }

  private validateError(params: Params): void {
    const error: Params = params['error'];

    if (error) {
      this.isLoginSuccess = false;

      this.notificationService.hideLoadingSnackbar();
    }
  }

  private validateScopes(params: Params): void {
    const scopes: Params = params['scope'];

    if (scopes.split(' ').length !== 6) {
      this.areScopesPresent = false;
    } else {
      this.notificationService.hideLoadingSnackbar();
    }
  }
}