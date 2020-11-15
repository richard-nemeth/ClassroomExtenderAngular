export interface StudentWork {
  title: string;
  maxPoints: number;
  deadline: string;
  draft_grade?: number
  final_grade?: number;
  late?: boolean;
}