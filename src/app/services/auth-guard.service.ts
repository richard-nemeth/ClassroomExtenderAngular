import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

import {LocalStorageService} from './local-storage.service';

import {RouteConstants} from '../constants/route.constants';
import {NotificationService} from './notification.service';

import {SnackBarConstants} from '../constants/snackbar.constants';

@Injectable()
export class AuthGuardService implements CanActivate {

  public constructor(
    private localStorageService: LocalStorageService,
    private router: Router,
    private notificationService: NotificationService
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isUserIdPresent: boolean = this.localStorageService.isUserIdPresent();

    if (!isUserIdPresent) {
      this.router.navigateByUrl(RouteConstants.REGISTRATION);

      this.notificationService.showErrorMessage(SnackBarConstants.ERROR_REGISTRATION_MISSING);
    }

    return isUserIdPresent;
  }
}