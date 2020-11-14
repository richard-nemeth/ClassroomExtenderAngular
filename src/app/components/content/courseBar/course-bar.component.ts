import {Component, Input} from "@angular/core";

import {Course} from 'src/app/models/courses/Course';

@Component({
  selector: 'app-course-bar',
  templateUrl: './course-bar.component.html'
})
export class CourseBarComponent {
  
  @Input() public course: Course;

  public isOpened: boolean;

  public constructor() {
  }

}