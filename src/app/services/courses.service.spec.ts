import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {getTestBed, TestBed, waitForAsync} from '@angular/core/testing';

import {CoursesService} from "./courses.service";
import {LocalStorageService} from './local-storage.service';
import {NotificationService} from './notification.service';

import {LocalStorageServiceStub} from '../test/testServices/localstorage.service.stub';
import {NotificationServiceStub} from '../test/testServices/notification.service.stub';

import {BackendEndpointConstants } from '../constants/backend-endpoint.constants';
import {TestCommonData} from '../test/testData/test-common.data';
import {TestCourseData} from '../test/testData/test-course.data';
import {Course} from '../models/courses/Course';

describe('CoursesService', () => {
  let coursesService: CoursesService;
  let notificationService: NotificationService;
  let localstorageService: LocalStorageService;
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [
        CoursesService,
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
    coursesService = injector.inject(CoursesService);
    notificationService = injector.inject(NotificationService);
    localstorageService = injector.inject(LocalStorageService);
    httpMock = injector.inject(HttpTestingController);
  });

  it('should display loading on getMyTeacherCourses call', () => {
    const spy = spyOn(notificationService, 'showLoadingSnackbar');

    coursesService.getMyTeacherCourses();

    expect(spy).toHaveBeenCalled();

  });

  it('should fetch stored userId on getMyTeacherCourses call', () => {
    const spy = spyOn(localstorageService, 'getUserIdFromStorage');

    coursesService.getMyTeacherCourses();

    expect(spy).toHaveBeenCalled();
  });


  it('should call to the backend on getMyTeacherCourses', () => {
    coursesService.getMyTeacherCourses();

    const req =
      httpMock.expectOne(BackendEndpointConstants.Courses.GET_MY_TEACHER_COURSES);

    expect(req.request.method).toBe('GET');

    req.flush(TestCourseData.COURSES);
  });

  it('should return Courses getMyTeacherCourses', async (done) => {
    spyOn(coursesService, 'getMyTeacherCourses').and.returnValue(Promise.resolve(TestCourseData.COURSES));

    const courses: Course[] = await coursesService.getMyTeacherCourses();

    expect(courses).toEqual(TestCourseData.COURSES);

    done();
  });

  it('should display loading on getMyInactiveTeacherCourses call', () => {
    const spy = spyOn(notificationService, 'showLoadingSnackbar');

    coursesService.getMyInactiveTeacherCourses()

    expect(spy).toHaveBeenCalled();

  });

  it('should fetch stored userId on getMyInactiveTeacherCourses call', () => {
    const spy = spyOn(localstorageService, 'getUserIdFromStorage');

    coursesService.getMyInactiveTeacherCourses();

    expect(spy).toHaveBeenCalled();
  });


  it('should call to the backend on getMyInactiveTeacherCourses', () => {
    coursesService.getMyInactiveTeacherCourses();

    const req =
      httpMock.expectOne(BackendEndpointConstants.Courses.GET_MY_INACTIVE_TEACHER_COURSES);

    expect(req.request.method).toBe('GET');

    req.flush(TestCourseData.COURSES);
  });

  it('should return Courses on getMyInactiveTeacherCourses', async (done) => {
    spyOn(coursesService, 'getMyInactiveTeacherCourses').and.returnValue(Promise.resolve(TestCourseData.COURSES));

    const courses: Course[] = await coursesService.getMyInactiveTeacherCourses();

    expect(courses).toEqual(TestCourseData.COURSES);

    done();
  });

  it('should display loading on uploadCourseStudents call', () => {
    const spy = spyOn(notificationService, 'showLoadingSnackbar');

    coursesService.uploadCourseStudents(TestCourseData.FILE, TestCommonData.CourseID);

    expect(spy).toHaveBeenCalled();

  });

  it('should fetch stored userId on uploadCourseStudents call', () => {
    const spy = spyOn(localstorageService, 'getUserIdFromStorage');

    coursesService.uploadCourseStudents(TestCourseData.FILE, TestCommonData.CourseID);

    expect(spy).toHaveBeenCalled();
  });

  it('should call to the backend on uploadCourseStudents', () => {
    coursesService.uploadCourseStudents(TestCourseData.FILE, TestCommonData.CourseID);

    const req =
      httpMock.expectOne(BackendEndpointConstants.Courses.POST_COURSE_STUDENTS);

    expect(req.request.method).toBe('POST');

    req.flush(null);
  });

  it('should should notify the user on success', () => {
    const spy = spyOn(notificationService, 'showSuccessMessage');

    coursesService.uploadCourseStudents(TestCourseData.FILE, TestCommonData.CourseID);

    const req =
      httpMock.expectOne(BackendEndpointConstants.Courses.POST_COURSE_STUDENTS);

    expect(req.request.method).toBe('POST');

    req.flush(null);
  });

  it('should display loading on getCourseData call', () => {
    const spy = spyOn(notificationService, 'showLoadingSnackbar');

    coursesService.getCourseData(TestCommonData.CourseID);

    expect(spy).toHaveBeenCalled();

  });

  it('should fetch stored userId on getCourseData call', () => {
    const spy = spyOn(localstorageService, 'getUserIdFromStorage');

    coursesService.getCourseData(TestCommonData.CourseID);

    expect(spy).toHaveBeenCalled();
  });
  
  it('should call to the backend on getCourseData', () => {
    coursesService.getCourseData(TestCommonData.CourseID);

    const req =
      httpMock.expectOne(BackendEndpointConstants.Courses.GET_COURSE_DATA + "?courseId=" + TestCommonData.CourseID);

    expect(req.request.method).toBe('GET');

    req.flush(new ArrayBuffer(5));
  });

  it('should return an url to for download on GetCourseData', async (done) => {
    spyOn(coursesService, 'getCourseData').and.returnValue(Promise.resolve('urlToDownload'));

    const url: string = await coursesService.getCourseData(TestCommonData.CourseID);

    expect(url).toEqual('urlToDownload');

    done();
  });
});