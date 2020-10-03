import {Injectable} from "@angular/core";
import {MatSnackBar, MatSnackBarRef} from '@angular/material/snack-bar';

import {ErrorComponent} from '../components/notification/error/error.component';
import {LoadingComponent} from '../components/notification/loading/loading.component';

import {SnackBarConstants} from '../constants/snackbar.constants';

@Injectable()
export class NotificationService {

  private loadingSnackbar: MatSnackBarRef<LoadingComponent>;

  public constructor(private matSnackbar: MatSnackBar) {
  }

  public showErrorMessage(): void {
    this.matSnackbar.openFromComponent(ErrorComponent, SnackBarConstants.ERROR_CONFIG);
  }

  public showLoadingSnackbar(): void {
    this.loadingSnackbar = this.matSnackbar.openFromComponent(LoadingComponent, SnackBarConstants.LOADING_CONFIG);
  }

  public hideLoadingSnackbar(): void {
    this.loadingSnackbar.dismiss();
  }
}