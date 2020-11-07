import {MatSnackBarConfig} from '@angular/material/snack-bar';

export class SnackBarConstants {

  private constructor() {
  }

  public static readonly ERROR_REGISTRATION_START: string = "Could not begin authentication!";
  public static readonly ERROR_REGISTRATION_PERSIST: string = "Could not persist registration!";

  public static readonly LOADING_CONFIG: MatSnackBarConfig = {
    horizontalPosition: "right",
    verticalPosition: "top"
  }
}