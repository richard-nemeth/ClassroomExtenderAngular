import {Course} from 'src/app/models/courses/Course';

export class CoursesServiceStub {
  public openCourseOnClassroom(url: string): void {
    window.open(url, '_blank');
  }

  public async getMyTeacherCourses(): Promise<Course[]> {
    return null;
  }

  public async getMyInactiveTeacherCourses(): Promise<Course[]> {
    return null;
  }

  public async uploadCourseStudents(studentsFile: File, courseId: string): Promise<void> {
    return null;
  }

  public async getCourseData(courseId: string): Promise<string> {
    return null;
  }
}