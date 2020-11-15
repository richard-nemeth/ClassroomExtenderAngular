import {Component, Input, OnChanges} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

import {Course} from 'src/app/models/courses/Course';
import {CourseWork} from 'src/app/models/courses/CourseWork';
import {Student} from 'src/app/models/students/Student';
import {StudentSubmission} from 'src/app/models/students/StudentSubmission';
import {StudentWork} from 'src/app/models/students/StudentWork';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnChanges {

  @Input() course: Course;
  @Input() student: Student;

  public readonly columns: string[] = [
    'title',
    'maxPoints',
    'deadline',
    'draftGrade',
    'finalGrade',
    'late'
  ];

  public dataSource = new MatTableDataSource<StudentWork>();

  public constructor() {
  }

  ngOnChanges(): void {
    this.createStudentWorks();
  }

  private createStudentWorks(): void {
    const studentWorks: StudentWork[] = new Array();

    if (this.course.courseWorks) {
      this.getStudentWorks(studentWorks);
    }

    this.dataSource.data = studentWorks;
  }

  private getStudentWorks(studentWorks: StudentWork[]): void {
    for (let i: number = 0; i < this.course.courseWorks.length; i++) {
      const foundSubmission =
        this.getStudentSubmissionForCourseWork(this.course.courseWorks[i].id);

      studentWorks.push(
        this.createStudentWork(this.course.courseWorks[i], foundSubmission)
      );
    }
  }

  private getStudentSubmissionForCourseWork(courseWorkId: string): StudentSubmission {
    let foundSubmission: StudentSubmission;

    for (let i: number = 0; i < this.student.submissions.length; i++) {
      if (courseWorkId === this.student.submissions[i].courseWorkId) {
        foundSubmission = this.student.submissions[i];

        break;
      }
    }

    return foundSubmission;
  }

  private createStudentWork(courseWork: CourseWork, studentSubmission: StudentSubmission): StudentWork {
    const studentWork: StudentWork = {
      title: courseWork.title,
      maxPoints: courseWork.maxPoints,
      deadline: courseWork.dueDate
    }

    if (studentSubmission) {
      studentWork.draft_grade = studentSubmission.draft_grade;
      studentWork.final_grade = studentSubmission.final_grade;
      studentWork.late = studentSubmission.late;
    }

    return studentWork;
  }
}
