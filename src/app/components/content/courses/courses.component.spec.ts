import {ComponentFixture, getTestBed, TestBed, waitForAsync} from '@angular/core/testing';

import {CoursesService} from 'src/app/services/courses.service';
import {CoursesServiceStub} from 'src/app/test/testServices/courses.service.stub';

import {CourseBarComponent} from './courseBar/course-bar.component';

import {CourseType} from 'src/app/models/courses/CourseType';
import {CoursesComponent} from './courses.component';
import {TestCourseData} from 'src/app/test/testData/test-course.data';

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let coursesService: CoursesService;
  let fixture: ComponentFixture<CoursesComponent>;
  let injector: TestBed;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
        declarations: [
          CourseBarComponent
        ],
        providers: [
          {
            provide: CoursesService,
            useClass: CoursesServiceStub
          }
        ]
    }).compileComponents();
  }));

  beforeEach(() => {
    injector = getTestBed();
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.debugElement.componentInstance;
    coursesService = injector.inject(CoursesService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call coursesService getMyTeacherCourses if active required onInit', () => {
    component.courseType = CourseType.MY_TEACHER_COURSES;

    const spy = spyOn(coursesService, 'getMyTeacherCourses').and.returnValue(Promise.resolve(TestCourseData.COURSES));

    component.ngOnInit();

    expect(spy).toHaveBeenCalled();
  });

  it('should call coursesService getMyInactiveTeacherCourses if inatvice required onInit', () => {
    component.courseType = CourseType.MY_INACTIVE_TEACHER_COURSES;

    const spy = spyOn(coursesService, 'getMyInactiveTeacherCourses').and.returnValue(Promise.resolve(TestCourseData.COURSES));

    component.ngOnInit();

    expect(spy).toHaveBeenCalled();
  });
});