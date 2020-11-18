import {ComponentFixture, getTestBed, TestBed, waitForAsync} from '@angular/core/testing';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';

import {CourseMenuComponent} from '../courseMenu/course-menu.component';

import {TestCourseData} from 'src/app/test/testData/test-course.data';
import {CoursesService} from 'src/app/services/courses.service';
import {CoursesServiceStub} from 'src/app/test/testServices/courses.service.stub';

describe('CourseBarComponent', () => {
  let component: CourseMenuComponent;
  let courseService: CoursesService;
  let fixture: ComponentFixture<CourseMenuComponent>;
  let injector: TestBed;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
        declarations: [
          CourseMenuComponent
        ],
        providers: [
          {
            provide: CoursesService,
            useClass: CoursesServiceStub
          }
        ],
        imports: [
          MatButtonModule,
          MatMenuModule,
          MatIconModule
        ]
    }).compileComponents();
  }));

  beforeEach(() => {
    injector = getTestBed();
    fixture = TestBed.createComponent(CourseMenuComponent);
    component = fixture.debugElement.componentInstance;
    component.course = TestCourseData.COURSES[0];
    courseService = injector.inject(CoursesService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call courseService openCourseOnClassroom on openCourseOnClassroom', () => {
    const spy = spyOn(courseService, 'openCourseOnClassroom');

    component.openCourseOnClassroom();

    expect(spy).toHaveBeenCalled();
  });

  it('should call document getElementById on startUploadFile', () => {
    const spy = spyOn(document, 'getElementById').and.returnValue(document.createElement('a'));

    component.startUploadFile();

    expect(spy).toHaveBeenCalledWith('fileInput');
  });

  it('should call anchor click on startUploadFile', () => {
    const anchor = document.createElement('a');
    spyOn(document, 'getElementById').and.returnValue(anchor);

    const spy = spyOn(anchor, 'click');

    component.startUploadFile();

    expect(spy).toHaveBeenCalled();
  });

  it('should call courseService uploadCourseStudents on handleFileUpload', () => {
    const spy = spyOn(courseService, 'uploadCourseStudents');

    component.handleFileUpload({
      length: 1,
      item(index: number): File {
        return new File([new Blob(['alma'], {type: 'text'})], "test.txt")
      }
    });

    expect(spy).toHaveBeenCalled();
  });

  it('should call courseService getCourseData on getCourseData', async (done) => {
    const spy = spyOn(courseService, 'getCourseData').and.returnValue(Promise.resolve('fileLink'));

    await component.getCourseData();

    expect(spy).toHaveBeenCalled();

    done();
  });

  it('should call document getElementById on getCourseData', async (done) => {
    const spy = spyOn(document, 'getElementById').and.returnValue(document.createElement('div'));
    spyOn(courseService, 'getCourseData').and.returnValue(Promise.resolve('fileLink'));

    await component.getCourseData();

    expect(spy).toHaveBeenCalledWith('fileDownload');

    done();
  });

  it('should call anchor setAttribute on getCourseData', async (done) => {
    spyOn(courseService, 'getCourseData').and.returnValue(Promise.resolve('fileLink'));

    const anchor = document.createElement('div');
    spyOn(document, 'getElementById').and.returnValue(anchor);

    const spy = spyOn(anchor, 'setAttribute');

    await component.getCourseData();

    expect(spy).toHaveBeenCalledWith('href', 'fileLink');

    done();
  });

  it('should call anchor click on getCourseData', async (done) => {
    spyOn(courseService, 'getCourseData').and.returnValue(Promise.resolve('fileLink'));

    const anchor = document.createElement('div');
    spyOn(document, 'getElementById').and.returnValue(anchor);

    const spy = spyOn(anchor, 'click');

    await component.getCourseData();

    expect(spy).toHaveBeenCalled();

    done();
  });
});