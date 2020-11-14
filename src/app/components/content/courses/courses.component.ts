import {Component, Input, OnInit} from "@angular/core";

import {CoursesService} from 'src/app/services/courses.service';

import {Course} from 'src/app/models/courses/Course';
import {CourseType} from 'src/app/models/courses/CourseType';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html'
})
export class CoursesComponent implements OnInit {

  @Input() public courseType: CourseType;

  public courses: Course[];

  public constructor(private coursesService: CoursesService) {
  }

  async ngOnInit(): Promise<void> {
    switch(this.courseType) {
      case CourseType.MY_TEACHER_COURSES: {
        this.courses = await this.coursesService.getMyTeacherCourses();

        break;
      }
    }
  }
}