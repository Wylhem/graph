import {BaseDto} from "../../../Base/base.dto";
import {StudentDto} from "../../Student/Dto/student.dto";
import {SubjectDto} from "../../Subject/Dto/subject.dto";
import {ProfessorDto} from "../../Professor/Dto/professor.dto";
import {ExamModel} from "../Model/exam.model";

export class ExamDto extends BaseDto {
  grade: number;
  date: Date;
  student?: StudentDto;
  subject?: SubjectDto;
  professor?: ProfessorDto;

  public static Load(exam: ExamModel): ExamDto {
    return {
      id: exam.exm_id,
      grade: exam.exm_grade,
      date: exam.exm_date,
      student: exam?.student ? StudentDto.Load(exam.student) : null,
      subject: exam?.subject ? SubjectDto.Load(exam.subject) : null,
      professor: exam.professor ? ProfessorDto.Load(exam.professor) : null,
      createdAt: exam.exm_createdat,
      updatedAt: exam.exm_updatedat,
    }
  }
}