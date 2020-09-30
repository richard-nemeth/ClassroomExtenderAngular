import {MatSnackBarConfig} from '@angular/material/snack-bar';

export class SnackBarConstants {

  private constructor() {
  }

  public static readonly CONFIG: MatSnackBarConfig = {
    duration: 3000,
    horizontalPosition: "center",
    verticalPosition: "bottom"
  }

  public static readonly ErrorMessages = class {
    public static readonly AUTH_ERROR: string = 'Could not begin authentication!';
  }
}