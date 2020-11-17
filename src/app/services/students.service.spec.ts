import {getTestBed, TestBed, waitForAsync} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import {StudentsService} from "./students.service";
import {BackendEndpointConstants} from '../constants/backend-endpoint.constants';
import {LocalStorageService} from './local-storage.service';
import {NotificationService} from './notification.service';

import {TestStudentData} from '../test/testData/test-student.data';

import {NotificationServiceStub} from '../test/testServices/notification.service.stub';
import {LocalStorageServiceStub} from '../test/testServices/localstorage.service.stub';
import {Student} from '../models/students/Student';
import { TestCommonData } from '../test/testData/test-common.data';

describe('StudentsService', () => {
  let studentsService: StudentsService;
  let notificationService: NotificationService;
  let localstorageService: LocalStorageService;
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [
        StudentsService,
        {
          provide: NotificationService,
          useClass: NotificationServiceStub
        },
        {
          provide: LocalStorageService,
          useClass: LocalStorageServiceStub
        }
      ],
      imports: [HttpClientTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    injector = getTestBed();
    studentsService = injector.inject(StudentsService);
    notificationService = injector.inject(NotificationService);
    localstorageService = injector.inject(LocalStorageService);
    httpMock = injector.inject(HttpTestingController);
  });

  it('should display loading on getStudentsForCourse call', () => {
    const spy = spyOn(notificationService, 'showLoadingSnackbar');

    studentsService.getStudentsForCourse(TestCommonData.CourseID);

    expect(spy).toHaveBeenCalled();

  });

  it('should fetch stored userId on getStudentsForCourse call', () => {
    const spy = spyOn(localstorageService, 'getUserIdFromStorage');

    studentsService.getStudentsForCourse(TestCommonData.CourseID);

    expect(spy).toHaveBeenCalled();
  });


  it('should call to the backend on getStudentsForCourse', () => {
    studentsService.getStudentsForCourse(TestCommonData.CourseID);

    const req =
      httpMock.expectOne(BackendEndpointConstants.Students.GET_STUDENTS_FOR_COURSE + "?courseId=" + TestCommonData.CourseID);

    expect(req.request.method).toBe('GET');
    req.flush(TestStudentData.STUDENTS);
  });

  it('should return Students', async (done) => {
    spyOn(studentsService, 'getStudentsForCourse').and.returnValue(Promise.resolve(TestStudentData.STUDENTS));

    const students: Student[] = await studentsService.getStudentsForCourse(TestCommonData.CourseID);

    expect(students).toEqual(TestStudentData.STUDENTS);

    done();
  });
});