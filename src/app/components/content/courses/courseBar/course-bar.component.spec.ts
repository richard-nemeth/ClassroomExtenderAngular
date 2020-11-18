import {ComponentFixture, getTestBed, TestBed, waitForAsync} from '@angular/core/testing';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatToolbarModule} from '@angular/material/toolbar';

import {CourseBarComponent} from './course-bar.component';
import {CourseMenuComponent} from '../courseMenu/course-menu.component';

import {TestCourseData} from 'src/app/test/testData/test-course.data';
import {StudentsComponent} from '../../students/students.component';

describe('CourseBarComponent', () => {
  let component: CourseBarComponent;
  let fixture: ComponentFixture<CourseBarComponent>;
  let injector: TestBed;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
        declarations: [
          CourseMenuComponent,
          StudentsComponent
        ],
        imports: [
          MatExpansionModule,
          MatToolbarModule
        ]
    }).compileComponents();
  }));

  beforeEach(() => {
    injector = getTestBed();
    fixture = TestBed.createComponent(CourseBarComponent);
    component = fixture.debugElement.componentInstance;
    component.course = TestCourseData.COURSES[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});