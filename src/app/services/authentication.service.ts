import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

import {LocalStorageService} from './local-storage.service';
import { NotificationService } from './notification.service';

import {RouteConstants} from '../constants/route.constants';
import {BackendEndpointConstants} from '../constants/backend-endpoint.constants';
import {SnackBarConstants} from '../constants/snackbar.constants';

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

        this.notificationService.showErrorMessage(SnackBarConstants.ERROR_REGISTRATION_START);
      });
  }

  public doLogout(): void {
    this.localStorageService.removeUserFromStorage();

    this.router.navigate([RouteConstants.REGISTRATION]);
  }
}