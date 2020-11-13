import {MatSnackBarConfig} from '@angular/material/snack-bar';

export class SnackBarConstants {

  private constructor() {
  }

  public static readonly ERROR_AUTHENTICATION_START: string = "Could not begin authentication!";
  public static readonly ERROR_AUTHENTICATION_PERSIST: string = "Could not persist authentication!";
  public static readonly ERROR_AUTHENTICATION_MISSING: string = "You must authenticate before usage!"

  public static readonly LOADING_CONFIG: MatSnackBarConfig = {
    horizontalPosition: "right",
    verticalPosition: "top"
  }
}