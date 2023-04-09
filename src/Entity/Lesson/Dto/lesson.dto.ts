import {BaseDto} from "../../../Base/base.dto";
import {ProfessorDto} from "../../Professor/Dto/professor.dto";
import {GroupesDto} from "../../groupes/Dto/groupes.dto";
import {ClassroomDto} from "../../Classroom/Dto/classroom.dto";
import {SubjectDto} from "../../Subject/Dto/subject.dto";
import {LessonModel} from "../Model/lesson.model";
import {AbsenceDto} from "../../Absence/Dto/absence.dto";

export class LessonDto extends BaseDto {
  scheduleStart: Date;
  scheduleEnd: Date;

  professor?: ProfessorDto;
  groups?: GroupesDto;
  classroom?: ClassroomDto;
  subject?: SubjectDto;
  absences?: Array<AbsenceDto>;

  public static Load(lesson: LessonModel): LessonDto {
    return {
      id: lesson.les_id,
      scheduleStart: lesson.les_scheduleStart,
      scheduleEnd: lesson.les_scheduleEnd,
      professor: lesson?.professor ? ProfessorDto.Load(lesson.professor) : null,
      groups: lesson?.groupes ? GroupesDto.Load(lesson.groupes) : null,
      absences: lesson?.absence ? lesson.absence.map((absence) => AbsenceDto.Load(absence)) : null,
      classroom: lesson.classroom ? ClassroomDto.Load(lesson.classroom) : null,
      subject: lesson.subject ? SubjectDto.Load(lesson.subject) : null,
      updatedAt: lesson.les_updatedat,
      createdAt: lesson.les_createdat,
    }
  }
}