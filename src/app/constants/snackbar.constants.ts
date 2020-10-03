import {MatSnackBarConfig} from '@angular/material/snack-bar';

export class SnackBarConstants {

  private constructor() {
  }

  public static readonly ERROR_CONFIG: MatSnackBarConfig = {
    duration: 5000,
    horizontalPosition: "center",
    verticalPosition: "bottom"
  }

  public static readonly LOADING_CONFIG: MatSnackBarConfig = {
    horizontalPosition: "right",
    verticalPosition: "top"
  }
}