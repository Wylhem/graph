import {lesson} from "@prisma/client";
import {GroupesModel} from "../../groupes/Model/groupes.model";
import {ClassroomModel} from "../../Classroom/Model/classroom.model";
import {ProfessorModel} from "../../Professor/Model/professor.model";
import {SubjectModel} from "../../Subject/Model/subject.model";
import {AbsenceModel} from "../../Absence/Model/absence.model";

export class LessonModel implements lesson {
  les_scheduleStart: Date;
  les_scheduleEnd: Date;
  les_id: number;
  les_subject: number;
  les_professor: number;
  les_groupes: number;
  les_classroom: number;
  les_createdat: Date;
  les_updatedat: Date;


  groupes?: GroupesModel;
  classroom?: ClassroomModel;
  professor?: ProfessorModel;
  subject?: SubjectModel;


  absence?: Array<AbsenceModel>;

}