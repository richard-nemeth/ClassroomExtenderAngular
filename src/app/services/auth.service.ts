import {Injectable} from "@angular/core";
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

import {BackendEndpointConstants} from '../constants/backend-endpoint.constants';
import { RouteConstants } from '../constants/route.constants';


@Injectable()
export class AuthService {

  public constructor(
    private httpClient: HttpClient,
    private router: Router
  ) {
  }

  public async authenticate(): Promise<void> {
    await this.httpClient.get(BackendEndpointConstants.Auth.Authentication).toPromise().then(response => {
      if(response) {
        this.router.navigate([RouteConstants.GUARDER]);
      }
    });
  }
}