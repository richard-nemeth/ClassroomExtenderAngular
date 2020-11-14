import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from "@angular/core";

import {LocalStorageService} from './local-storage.service';
import {NotificationService} from './notification.service';

import {BackendEndpointConstants} from '../constants/backend-endpoint.constants';
import {SnackBarConstants} from '../constants/snackbar.constants';

import {Student} from '../models/courses/Student';


@Injectable()
export class StudentsService {

  public constructor(
    private httpClient: HttpClient,
    private notificationService: NotificationService,
    private localStorageService: LocalStorageService,
  ) {
  }

  public async getStudentsForCourse(courseId: string): Promise<Student[]> {
    this.notificationService.showLoadingSnackbar();
    const authHeader: string = 'Basic ' + this.localStorageService.getUserIdFromStorage();
    let foundStudents: Student[];

    await this.httpClient.get<Student[]>(
      BackendEndpointConstants.Students.GET_STUDENTS_FOR_COURSE,
      {
        params: {
          courseId: courseId
        },
        headers: new HttpHeaders({
          authorization: authHeader
        })
      }
    ).toPromise().then((students: Student[]) => {
      this.notificationService.hideLoadingSnackbar();

      foundStudents = students;
    }).catch((error: any) => {
      console.log(error);

      this.notificationService.showErrorMessage(SnackBarConstants.ERROR_COULD_NOT_GET_STUDENTS_FOR_COURSES);
    });

    return foundStudents;
  }
}