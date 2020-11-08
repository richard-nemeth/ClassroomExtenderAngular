import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

import {BackendEndpointConstants} from '../constants/backend-endpoint.constants';
import {SnackBarConstants} from '../constants/snackbar.constants';
import {RouteConstants} from '../constants/route.constants';

import {LocalStorageService} from './local-storage.service';
import {NotificationService} from './notification.service';

import {RegistrationRequest} from '../models/RegistrationRequest';

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
    const registrationRequest: RegistrationRequest = {
      registrationCode: registrationCode
    }

    this.httpClient.post(
      BackendEndpointConstants.Registration.PERSIST_REGISTRATION,
      registrationRequest,
      {
        headers:  new HttpHeaders({
          contentType: 'application/json'
        }),
        responseType: 'text'
      }
    ).toPromise().then((userIdResponse: string) => {
      this.localStorageService.setUserToStorage(decodeURI(userIdResponse));

      this.router.navigate([RouteConstants.HOME]);

      this.notificationService.hideLoadingSnackbar();
    }).catch((error: any) => {
      console.log(error);

      this.notificationService.showErrorMessage(SnackBarConstants.ERROR_REGISTRATION_PERSIST);
    });
  }
}