import {Injectable} from "@angular/core";
import {MatSnackBar, MatSnackBarRef} from '@angular/material/snack-bar';

import {ErrorComponent} from '../components/notification/error/error.component';
import {LoadingComponent} from '../components/notification/loading/loading.component';
import {SuccessComponent} from '../components/notification/success/success.component';

import {SnackBarConstants} from '../constants/snackbar.constants';

@Injectable()
export class NotificationService {

  private loadingSnackbar: MatSnackBarRef<LoadingComponent>;

  public constructor(private matSnackbar: MatSnackBar) {
  }

  public showErrorMessage(message: string): void {
    this.matSnackbar.openFromComponent(
      ErrorComponent,
      {
        duration: 5000,
        horizontalPosition: "center",
        verticalPosition: "bottom",
        data: message
      }
    );
  }

  public showSuccessMessage(message: string): void {
    this.matSnackbar.openFromComponent(
      SuccessComponent,
      {
        duration: 5000,
        horizontalPosition: "center",
        verticalPosition: "bottom",
        data: message
      }
    );
  }

  public showLoadingSnackbar(): void {
    this.loadingSnackbar = this.matSnackbar.openFromComponent(LoadingComponent, SnackBarConstants.LOADING_CONFIG);
  }
  
  public hideLoadingSnackbar(): void {
    this.loadingSnackbar.dismiss();
  }
}