import {ComponentFixture, getTestBed, TestBed, waitForAsync} from '@angular/core/testing';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';

import {TestCourseData} from 'src/app/test/testData/test-course.data';
import {MatTableModule} from '@angular/material/table';

import {StudentsComponent} from './students.component';
import {StudentsService} from 'src/app/services/students.service';
import {StudentsServiceStub} from 'src/app/test/testServices/students.service.stub';
import {TestStudentData} from 'src/app/test/testData/test-student.data';

describe('StudentsComponent', () => {
  let component: StudentsComponent;
  let fixture: ComponentFixture<StudentsComponent>;
  let studentsService: StudentsService;
  let injector: TestBed;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
        declarations: [
          StudentsComponent
        ],
        providers: [
          {
            provide: StudentsService,
            useClass: StudentsServiceStub
          }
        ],
        imports: [
          MatTableModule,
          MatInputModule,
          MatFormFieldModule,
          BrowserAnimationsModule,
          MatPaginatorModule,
          MatIconModule
        ]
    }).compileComponents();
  }));

  beforeEach(() => {
    injector = getTestBed();
    fixture = TestBed.createComponent(StudentsComponent);
    component = fixture.debugElement.componentInstance;
    component.course = TestCourseData.COURSES[0];
    studentsService = injector.inject(StudentsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call studentsService getStudentsForCourse onInit', () => {
    const spy = spyOn<any>(studentsService, 'getStudentsForCourse')
      .and.returnValue(Promise.resolve(TestStudentData.STUDENTS));

    component.ngOnInit();

    expect(spy).toHaveBeenCalled();
  });
  
});