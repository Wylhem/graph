import {student} from "@prisma/client";
import {PersonModel} from "../../Person/Model/person.model";
import {GroupesModel} from "../../groupes/Model/groupes.model";
import {AbsenceModel} from "../../Absence/Model/absence.model";
import {ExamModel} from "../../Exam/Model/exam.model";

export class StudentModel implements student {
  std_id: number;
  std_isineu: boolean;
  std_disability: boolean;
  std_scholarship: boolean;
  std_createdat: Date;
  std_updatedat: Date;
  std_person: number;
  std_groupes: number;
  person?: PersonModel;
  groupes?: GroupesModel;

  exam?: Array<ExamModel>;
  absence?: Array<AbsenceModel>;

  /**
   * Calculated field
   */
  average?: number;
}