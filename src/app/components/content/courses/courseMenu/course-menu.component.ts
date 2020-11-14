import { Component, Input } from "@angular/core";
import {Course} from 'src/app/models/courses/Course';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-course-menu',
  templateUrl: './course-menu.component.html'
})
export class CourseMenuComponent {

  @Input() public course: Course;

  public constructor(private courseService: CoursesService) {
  }

  public openCourseOnClassroom(): void {
    this.courseService.openCourseOnClassroom(this.course.link);
  }
}