import {Student} from 'src/app/models/students/Student';

export class TestStudentData {

  private constructor() {
  }

  public static readonly STUDENTS: Student[] = [{
    id: "student1",
    storedStudentData: {
      name: "TestName",
      neptunCode: "TestCode",
      department: "TestDep",
      tried: 1
    },
    submissions: [{
      id: "sub1",
      courseWorkId: "courseWork1",
      late: false,
      draft_grade: 100,
      final_grade: 100
    }]
  }];
}