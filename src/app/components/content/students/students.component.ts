import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

import {Student} from 'src/app/models/courses/Student';

import {StudentsService} from 'src/app/services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  @Input() courseId: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  public readonly columns: string[] = ['name', 'options'];
  public dataSource = new MatTableDataSource<Student>();

  public selectedStudent: Student;

  public constructor(private studentsService: StudentsService) {
  }

  async ngOnInit(): Promise<void> {
    const students: Student[] = await this.studentsService.getStudentsForCourse(this.courseId);
    
    if (students) {
      this.dataSource.data = students;
      this.dataSource.paginator = this.paginator;
    }
  }

  public applyDataTableFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }

  public showStudentDetails(student: Student): void {
    this.selectedStudent = student;
  }
}