import {Course} from 'src/app/models/courses/Course';

export class TestCourseData {
  private constructor() {
  }

  public static readonly FILE: File = new File([], 'test.txt');

  public static readonly COURSES: Course[] = [{
    id: 'courseId',
    name: 'courseName',
    link: 'courseLink',
    courseWorks: [{
      id: 'courseWorkId',
      title: 'CourseWork',
      maxPoints: 100,
      dueDate: null
    }]
  }];
}