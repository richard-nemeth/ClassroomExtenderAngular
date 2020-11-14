import { Component, Input } from "@angular/core";
import {Course} from 'src/app/models/courses/Course';

@Component({
  selector: 'app-course-menu',
  templateUrl: './course-menu.component.html'
})
export class CourseMenuComponent {

  @Input() public course: Course;

  public constructor() {
  }
}