import {BaseDto} from "../../../Base/base.dto";
import {PersonDto} from "../../Person/Dto/person.dto";
import {StudentModel} from "../Model/student.model";
import {GroupesDto} from "../../groupes/Dto/groupes.dto";
import {AbsenceDto} from "../../Absence/Dto/absence.dto";
import {ExamDto} from "../../Exam/Dto/exam.dto";

export class StudentDto extends BaseDto {
  isInEu: boolean;

  disability: boolean;

  scholarship: boolean;

  person?: PersonDto;

  groupes?: GroupesDto;

  absences?: Array<AbsenceDto>;

  exams?: Array<ExamDto>;

  /**
   * Calculated Field.
   */
  average?: number

  public static Load(studentModel: StudentModel): StudentDto {
    return {
      id: studentModel.std_id,
      isInEu: studentModel.std_isineu,
      disability: studentModel.std_disability,
      scholarship: studentModel.std_scholarship,
      person: studentModel.person ? PersonDto.Load(studentModel.person) : null,
      groupes: studentModel.groupes ? GroupesDto.Load(studentModel.groupes) : null,
      absences: studentModel.absence ? studentModel.absence.map((absence) => AbsenceDto.Load(absence)) : null,
      exams: studentModel.exam ? studentModel.exam.map((exam) => ExamDto.Load(exam)) : null,
      createdAt: studentModel.std_createdat,
      updatedAt: studentModel.std_updatedat,
      average: studentModel.average,
    }
  }

}