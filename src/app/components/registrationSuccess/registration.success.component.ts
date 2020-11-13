import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

import {RegistrationService} from 'src/app/services/registration.service';
import {AuthenticationService} from 'src/app/services/authentication.service';

@Component({
  selector: 'app-registration-success',
  templateUrl: './registration.success.component.html',
})
export class RegistrationSuccessComponent implements OnInit {

  public isLoginSuccess: boolean = true;
  public areScopesPresent: boolean = true;

  public constructor(
    private route: ActivatedRoute,
    private registrationService: RegistrationService,
    private authenticationService: AuthenticationService
  ) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.validateError(params);
      
      if (this.isLoginSuccess) {
        this.validateScopes(params);

        if (this.areScopesPresent) {
          this.registrationService.completeRegistration(params['code']);
        }
      }
    });
  }

  public retry(): void {
    this.authenticationService.startAuthentication();
  }

  private validateError(params: Params): void {
    const error: Params = params['error'];

    if (error) {
      this.isLoginSuccess = false;
    }
  }

  private validateScopes(params: Params): void {
    const scopes: Params = params['scope'];

    if (scopes.split(' ').length !== 9) {
      this.areScopesPresent = false;
    }
  }
}