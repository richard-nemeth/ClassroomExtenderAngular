import {Injectable} from "@angular/core";
import {HttpClient} from '@angular/common/http';

import {BackendEndpointConstants} from '../constants/backend-endpoint.constants';

@Injectable()
export class AuthService {

  public constructor(private httpClient: HttpClient) {
  }

  public async authenticate(): Promise<void> {

    await this.httpClient.get(BackendEndpointConstants.Auth.Authentication).toPromise().then(response => {
      if(response) {
        console.log(response);
      }
    });
  }
}