import {Component} from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html'
})
export class StudentsComponent {

  public constructor() {
    console.log('hívva');
  }
}