import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from "@angular/core";

import {NotificationService} from './notification.service';
import {LocalStorageService} from './local-storage.service';

import {BackendEndpointConstants} from '../constants/backend-endpoint.constants';

import {Course} from '../models/courses/Course';

import {SnackBarConstants} from '../constants/snackbar.constants';

@Injectable()
export class CoursesService {

  public constructor(
    private httpClient: HttpClient,
    private notificationService: NotificationService,
    private localStorageService: LocalStorageService,
  ) {
  }

  public openCourseOnClassroom(url: string): void {
    window.open(url, '_blank');
  }

  public async getMyTeacherCourses(): Promise<Course[]> {
    this.notificationService.showLoadingSnackbar();
    const authHeader: string = 'Basic ' + this.localStorageService.getUserIdFromStorage();
    let foundCourses: Course[];

    await this.httpClient.get<Course[]>(
      BackendEndpointConstants.Courses.GET_MY_TEACHER_COURSES,
      {
        headers: new HttpHeaders({
          authorization: authHeader
        })
      }
    ).toPromise().then((courses: Course[]) => {
      this.notificationService.hideLoadingSnackbar();

      foundCourses = courses;
    }).catch((error: any) => {
      console.log(error);

      this.notificationService.showErrorMessage(SnackBarConstants.ERROR_COULD_NOT_GET_MY_TEACHER_COURSES);
    });

    return foundCourses;
  }

  public async getMyInactiveTeacherCourses(): Promise<Course[]> {
    this.notificationService.showLoadingSnackbar();
    const authHeader: string = 'Basic ' + this.localStorageService.getUserIdFromStorage();
    let foundCourses: Course[];

    await this.httpClient.get<Course[]>(
      BackendEndpointConstants.Courses.GET_MY_INACTIVE_TEACHER_COURSES,
      {
        headers: new HttpHeaders({
          authorization: authHeader
        })
      }
    ).toPromise().then((courses: Course[]) => {
      this.notificationService.hideLoadingSnackbar();

      foundCourses = courses;
    }).catch((error: any) => {
      console.log(error);

      this.notificationService.showErrorMessage(SnackBarConstants.ERROR_COULD_NOT_GET_MY_TEACHER_COURSES);
    });

    return foundCourses;
  }
}