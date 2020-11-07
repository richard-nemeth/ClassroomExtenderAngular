import {Injectable} from "@angular/core";
import {HttpClient} from '@angular/common/http';

import {NotificationService} from './notification.service';

import {BackendEndpointConstants} from '../constants/backend-endpoint.constants';
import {SnackBarConstants} from '../constants/snackbar.constants';
import {LocalStorageService} from './local-storage.service';
import {Router} from '@angular/router';
import { RouteConstants } from '../constants/route.constants';

@Injectable()
export class RegistrationService {

  public constructor(
    private httpClient: HttpClient,
    private notificationService: NotificationService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {
  }

  public startRegistration(): void {
    this.notificationService.showLoadingSnackbar();

    this.httpClient.get(BackendEndpointConstants.Registration.REGISTRATION, {responseType: 'text'}).toPromise()
      .then((authURlResponse: string) => {
        window.open(decodeURI(authURlResponse.toString()), '_self');
      }).catch((error: any) => {
        console.log(error);

        this.notificationService.showErrorMessage(SnackBarConstants.ERROR_REGISTRATION_START);
      });
  }

  public completeRegistration(registrationCode: string): void {
    this.notificationService.showLoadingSnackbar();

    this.httpClient.post(
      BackendEndpointConstants.Registration.PERSIST_REGISTRATION,
      {
        registrationCode: registrationCode
      },
      {
        responseType: 'text'
      }).toPromise().then((userIdResponse: string) => {
      this.localStorageService.setUserToStorage(userIdResponse);

      this.router.navigate([RouteConstants.HOME]);
      }).catch((error: any) => {
        console.log(error);

        this.notificationService.showErrorMessage(SnackBarConstants.ERROR_REGISTRATION_PERSIST);
      });
  }
}