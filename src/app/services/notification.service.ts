import {Injectable} from "@angular/core";
import {MatSnackBar, MatSnackBarRef} from '@angular/material/snack-bar';

import {ErrorSnackbarComponent} from '../components/error-snackbar/error-snackbar.component';
import {LoadingComponent} from '../components/loading/loading.component';

import {SnackBarConstants} from '../constants/snackbar.constants';

@Injectable()
export class NotificationService {

  private loadingSnackbar: MatSnackBarRef<LoadingComponent>;

  public constructor(private matSnackbar: MatSnackBar) {
  }

  public showErrorMessage(): void {
    this.matSnackbar.openFromComponent(ErrorSnackbarComponent, SnackBarConstants.ERROR_CONFIG);
  }

  public showLoadingSnackbar(): void {
    this.loadingSnackbar = this.matSnackbar.openFromComponent(LoadingComponent, SnackBarConstants.LOADING_CONFIG);
  }

  public hideLoadingSnackbar(): void {
    this.loadingSnackbar.dismiss();
  }
}