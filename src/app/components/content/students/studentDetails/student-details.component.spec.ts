import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {StudentDetailsComponent} from "./student-details.component";

import {TestCourseData} from 'src/app/test/testData/test-course.data';
import {TestStudentData} from 'src/app/test/testData/test-student.data';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';

describe('StudentDetailsComponent', () => {
  let component: StudentDetailsComponent;
  let fixture: ComponentFixture<StudentDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
        declarations: [
          StudentDetailsComponent
        ],
        imports: [
          MatTableModule,
          MatToolbarModule
        ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDetailsComponent);
    component = fixture.debugElement.componentInstance;
    component.course = TestCourseData.COURSES[0]
    component.student = TestStudentData.STUDENTS[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call createStudentWorks ngOnChanges', () => {
    const spy = spyOn<any>(component, 'createStudentWorks');

    component.ngOnChanges();

    expect(spy).toHaveBeenCalled();
  });
  
  it('should call getStudentWorks on createStudentWorks', () => {
    const spy = spyOn<any>(component, 'getStudentWorks');

    component.ngOnChanges();

    expect(spy).toHaveBeenCalled();
  });

  it('should call getStudentSubmissionForCourseWork on getStudentWorks', () => {
    const spy = spyOn<any>(component, 'getStudentSubmissionForCourseWork');

    component.ngOnChanges();

    expect(spy).toHaveBeenCalled();
  });

  it('should call createStudentWork on getStudentWorks', () => {
    const spy = spyOn<any>(component, 'createStudentWork');

    component.ngOnChanges();

    expect(spy).toHaveBeenCalled();
  });
});