import {Component} from '@angular/core';

import {CourseType} from 'src/app/models/courses/CourseType';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  public myTeacher: CourseType = CourseType.MY_TEACHER_COURSES;

  public constructor() {
  }
}