import {Injectable} from "@angular/core";
import {MatSnackBar} from '@angular/material/snack-bar';

import {LoadingComponent} from '../components/loading/loading.component';

import {SnackBarConstants} from '../constants/snackbar.constants';

@Injectable()
export class NotificationService {

  public constructor(private matSnackbar: MatSnackBar) {
  }

  public showErrorMessage(errorMessage: string): void {
    this.matSnackbar.open(errorMessage, SnackBarConstants.CLOSE_ACTION, SnackBarConstants.ERROR_CONFIG);
  }

  public showLoadingSnackbar(): void {
    this.matSnackbar.openFromComponent(LoadingComponent, SnackBarConstants.LOADING_CONFIG);
  }
}