import {Component, Input} from "@angular/core";
import {SafeResourceUrl} from '@angular/platform-browser';

import {Course} from 'src/app/models/courses/Course';

import {CoursesService} from 'src/app/services/courses.service';

@Component({
  selector: 'app-course-menu',
  templateUrl: './course-menu.component.html'
})
export class CourseMenuComponent {

  @Input() public course: Course;

  public fileToDownloadUrl: SafeResourceUrl;

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

  public async getCourseData(): Promise<void> {
    this.fileToDownloadUrl = await this.courseService.getCourseData(this.course.id);

    document.getElementById('fileDownload').click();
  }
}