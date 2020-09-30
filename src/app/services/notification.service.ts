import {Injectable} from "@angular/core";
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';
import { SnackBarConstants } from '../constants/snackbar.constants';

@Injectable()
export class NotificationService {

  public constructor(private matSnackbar: MatSnackBar) {
  }

  public showErrorMessage(errorMessage: string): void {
    this.matSnackbar.open(errorMessage);
  }
}