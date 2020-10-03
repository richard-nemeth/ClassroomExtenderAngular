import {MatSnackBarConfig} from '@angular/material/snack-bar';

export class SnackBarConstants {

  private constructor() {
  }

  public static readonly CLOSE_ACTION: string = 'Close';

  public static readonly ERROR_CONFIG: MatSnackBarConfig = {
    duration: 3000,
    horizontalPosition: "center",
    verticalPosition: "bottom"
  }

  public static readonly LOADING_CONFIG: MatSnackBarConfig = {
    horizontalPosition: "right",
    verticalPosition: "top"
  }

  public static readonly ErrorMessages = class {
    public static readonly AUTH_ERROR: string = 'Could not begin authentication!';
  }
}