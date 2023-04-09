import {BaseDto} from "../../../Base/base.dto";
import {EstablishmentDto} from "../../Establishment/Dto/establishment.dto";
import {ClassroomModel} from "../Model/classroom.model";
import {LessonDto} from "../../Lesson/Dto/lesson.dto";

export class ClassroomDto extends BaseDto {
  label: string;

  establishment?: EstablishmentDto;
  lessons?: Array<LessonDto>;

  public static Load(classroom: ClassroomModel): ClassroomDto {
    return {
      id: classroom.clr_id,
      label: classroom.clr_label,
      establishment: classroom?.establishment ? EstablishmentDto.Load(classroom.establishment) : null,
      lessons: classroom?.lesson ? classroom.lesson.map((lesson) => LessonDto.Load(lesson)) : null,
      createdAt: classroom.clr_createdat,
      updatedAt: classroom.cls_updatedat,
    }
  }
}