import {Component, Input, OnInit} from '@angular/core';
import {Student} from 'src/app/models/courses/Student';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html'
})
export class StudentDetailsComponent implements OnInit {

  @Input() student: Student;

  public constructor() {
  }

  ngOnInit(): void {
  }
}
