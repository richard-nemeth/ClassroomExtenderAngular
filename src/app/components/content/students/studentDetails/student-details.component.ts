import {Component, Input, OnInit} from '@angular/core';
import {Student} from 'src/app/models/courses/Student';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  @Input() student: Student;

  public constructor() {
  }

  ngOnInit(): void {
  }
}
