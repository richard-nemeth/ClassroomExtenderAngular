import {Component, Input, OnInit} from "@angular/core";

import {Course} from 'src/app/models/courses/Course';

import {CoursesService} from 'src/app/services/courses.service';

@Component({
  selector: 'app-course-menu',
  templateUrl: './course-menu.component.html'
})
export class CourseMenuComponent implements OnInit {

  @Input() public course: Course;

  public fileToDownloadName: string;

  public constructor(private courseService: CoursesService) {
  }

  ngOnInit(): void {
    this.fileToDownloadName = "CourseData_" + this.course.id + ".xlsx";
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
    const fileToDownloadUrl: string = await this.courseService.getCourseData(this.course.id);

    const hrefElement: HTMLElement = document.getElementById('fileDownload');
    hrefElement.setAttribute("href", fileToDownloadUrl);

    hrefElement.click();
  }
}