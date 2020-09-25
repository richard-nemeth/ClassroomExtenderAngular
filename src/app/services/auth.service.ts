import {Injectable} from "@angular/core";
import {HttpClient} from '@angular/common/http';

import {RouteConstants} from '../constants/route.constants';

@Injectable()
export class AuthService {

  public constructor(private httpClient: HttpClient) {
  }

  public async authenticate(): Promise<void> {

    await this.httpClient.get(RouteConstants.Auth.Authentication).toPromise().then(response => {
      if(response) {
        console.log(response);
      }
    });
  }
}