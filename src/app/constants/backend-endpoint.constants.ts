import {environment} from '../../environments/environment';

export class BackendEndpointConstants {
  private constructor() {
  }

  public static readonly Authentication = class {
    public static readonly AUTHENTICATION: string = environment.backendBaseUrl + 'start_authentication';
    public static readonly PERSIST_AUTHENTICATION: string = environment.backendBaseUrl + 'persist_authentication';
  }

  public static readonly Courses = class {
    public static readonly GET_MY_TEACHER_COURSES: string = environment.backendBaseUrl + 'getMyTeacherCourses';
    public static readonly GET_MY_INACTIVE_TEACHER_COURSES: string = environment.backendBaseUrl + 'getMyInactiveTeacherCourses';
  }

  public static readonly Students = class {
    public static readonly GET_STUDENTS_FOR_COURSE: string = environment.backendBaseUrl + '/getStudentsForCourse';
  }
}