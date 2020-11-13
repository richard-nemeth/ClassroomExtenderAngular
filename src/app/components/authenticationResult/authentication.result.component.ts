import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

import {AuthenticationService} from 'src/app/services/authentication.service';

@Component({
  selector: 'app-authentication-result',
  templateUrl: './authentication.result.component.html',
})
export class AuthenticationResultComponent implements OnInit {

  public isLoginSuccess: boolean = true;
  public areScopesPresent: boolean = true;

  public constructor(
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService
  ) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.validateError(params);
      
      if (this.isLoginSuccess) {
        this.validateScopes(params);

        if (this.areScopesPresent) {
          this.authenticationService.persistAuthentication(params['code']);
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