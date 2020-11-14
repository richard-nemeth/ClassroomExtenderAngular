import {Component, Input, OnInit} from '@angular/core';

import {Student} from 'src/app/models/courses/Student';

import {StudentsService} from 'src/app/services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html'
})
export class StudentsComponent implements OnInit {

  @Input() courseId: string;

  public readonly columns: string[] = ['name'];
  public students: Student[];

  public constructor(private studentsService: StudentsService) {
  }

  async ngOnInit(): Promise<void> {
    this.students = await this.studentsService.getStudentsForCourse(this.courseId);
  }
}