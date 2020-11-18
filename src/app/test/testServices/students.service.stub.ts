import {Student} from 'src/app/models/students/Student';

export class StudentsServiceStub {
  public async getStudentsForCourse(courseId: string): Promise<Student[]> {
    return null;
  }
}