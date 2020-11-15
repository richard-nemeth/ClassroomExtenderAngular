import {Component, Input} from "@angular/core";
import { FormControl } from '@angular/forms';

import {Course} from 'src/app/models/courses/Course';

import {CoursesService} from 'src/app/services/courses.service';

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

  public startUploadFile(): void {
    document.getElementById('fileInput').click();
  }

  public handleFileUpload(files: FileList) {
    this.courseService.uploadCourseStudents(files.item(0), this.course.id);
  }
}