import {Injectable} from "@angular/core";
import {HttpClient} from '@angular/common/http';

import {NotificationService} from './notification.service';

import {BackendEndpointConstants} from '../constants/backend-endpoint.constants';
import {SnackBarConstants} from '../constants/snackbar.constants';

@Injectable()
export class AuthService {

  public constructor(
    private httpClient: HttpClient,
    private notificationService: NotificationService
  ) {
  }

  public authenticate(): void {
    this.httpClient.get(BackendEndpointConstants.Auth.Authentication, {responseType: 'text'}).toPromise()
      .then(response => {
        window.open(decodeURI(response.toString()), '_self');
      }).catch((error: any) => {
        console.log(error);

        this.notificationService.showErrorMessage(SnackBarConstants.ErrorMessages.AUTH_ERROR);
      })
  }
}