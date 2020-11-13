import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

import {LocalStorageService} from './local-storage.service';
import {NotificationService} from './notification.service';

import {RouteConstants} from '../constants/route.constants';
import {BackendEndpointConstants} from '../constants/backend-endpoint.constants';
import {SnackBarConstants} from '../constants/snackbar.constants';

import {AuthenticationRequest} from '../models/AuthenticationRequest';

@Injectable()
export class AuthenticationService {
  
  public constructor(
    private httpClient: HttpClient,
    private router: Router,
    private localStorageService: LocalStorageService,
    private notificationService: NotificationService
  ) {
  }

  public startAuthentication(): void {
    this.notificationService.showLoadingSnackbar();

    this.httpClient.get(BackendEndpointConstants.Authentication.AUTHENTICATION, {responseType: 'text'}).toPromise()
      .then((authURlResponse: string) => {
        window.open(decodeURI(authURlResponse.toString()), '_self');
      }).catch((error: any) => {
        console.log(error);

        this.notificationService.showErrorMessage(SnackBarConstants.ERROR_AUTHENTICATION_START);
      });
  }

  public persistAuthentication(code: string): void {
    this.notificationService.showLoadingSnackbar();
    const authenticationRequest: AuthenticationRequest = {
      code: code
    }

    this.httpClient.post(
      BackendEndpointConstants.Authentication.PERSIST_AUTHENTICATION,
      authenticationRequest,
      {
        headers:  new HttpHeaders({
          contentType: 'application/json'
        }),
        responseType: 'text'
      }
    ).toPromise().then((userIdResponse: string) => {
      this.localStorageService.setUserIdToStorage(decodeURI(userIdResponse));

      this.router.navigate([RouteConstants.HOME]);

      this.notificationService.hideLoadingSnackbar();
    }).catch((error: any) => {
      console.log(error);

      this.notificationService.showErrorMessage(SnackBarConstants.ERROR_AUTHENTICATION_PERSIST);
    });
  }

  public doLogout(): void {
    this.localStorageService.removeUserIdFromStorage();

    this.router.navigate([RouteConstants.AUTHENTICATION]);
  }
}