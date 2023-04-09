import {BaseDto} from "../../../Base/base.dto";
import {StudentDto} from "../../Student/Dto/student.dto";
import {LessonDto} from "../../Lesson/Dto/lesson.dto";
import {AbsenceModel} from "../Model/absence.model";

export class AbsenceDto extends BaseDto {
  student?: StudentDto;
  lesson?: LessonDto;

  public static Load(absence: AbsenceModel): AbsenceDto {
    return {
      id: absence.abs_id,
      student: absence?.student ? StudentDto.Load(absence.student) : null,
      lesson: absence?.lesson ? LessonDto.Load(absence.lesson) : null,
      createdAt: absence.abs_createdat,
      updatedAt: absence.abs_updatedat,
    }
  }
}