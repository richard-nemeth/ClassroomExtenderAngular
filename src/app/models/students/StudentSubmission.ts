export interface StudentSubmission {
  id: string;
  courseWorkId: string;
  late: boolean;
  draft_grade: number
  final_grade: number;
}