import {MatSnackBarConfig} from '@angular/material/snack-bar';

export class SnackBarConstants {

  private constructor() {
  }

  public static readonly ERROR_AUTHENTICATION_START: string = "Could not begin authentication";
  public static readonly ERROR_AUTHENTICATION_PERSIST: string = "Could not persist authentication";
  public static readonly ERROR_AUTHENTICATION_MISSING: string = "You must authenticate before usage"

  public static readonly ERROR_COULD_NOT_GET_MY_TEACHER_COURSES: string = "Could not retreive your teacher courses";
  public static readonly ERROR_COULD_NOT_GET_MY_INACTIVE_TEACHER_COURSES: string = "Could not retreive your inactive teacher courses!";

  public static readonly ERROR_COULD_NOT_GET_STUDENTS_FOR_COURSES: string = "Could not retreive students for course";

  public static readonly ERROR_COURSE_STUDENT_UPLOAD: string = "Could not upload students for course";
  public static readonly SUCCESS_COURSE_STUDENT_UPLOAD: string = "Students successfully added"

  public static readonly ERROR_GET_COURS_DATA: string = "Could not download course data";
  public static readonly ERROR_DOWNLOAD_GET_COURS_DATA: string = "Please disable your adblock to proceed with download!";

  public static readonly LOADING_CONFIG: MatSnackBarConfig = {
    horizontalPosition: "right",
    verticalPosition: "top"
  }
}