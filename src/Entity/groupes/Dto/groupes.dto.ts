import {BaseDto} from "../../../Base/base.dto";
import {StudentDto} from "../../Student/Dto/student.dto";
import {GroupesModel} from "../Model/groupes.model";
import {ClassesDto} from "../../Classes/Dto/classes.dto";
import {LessonDto} from "../../Lesson/Dto/lesson.dto";

export class GroupesDto extends BaseDto {
  label: string;

  student?: Array<StudentDto>

  classes?: ClassesDto;

  lessons?: Array<LessonDto>;

  public static Load(groupModel: GroupesModel): GroupesDto {
    return {
      id: groupModel.grp_id,
      label: groupModel.grp_label,
      student: groupModel?.student ? groupModel.student.map((student) => StudentDto.Load(student)) : null,
      lessons: groupModel.lesson ? groupModel.lesson.map((lesson) => LessonDto.Load(lesson)) : null,
      classes: groupModel?.classes ? ClassesDto.Load(groupModel.classes) : null,
      createdAt: groupModel.cls_createdat,
      updatedAt: groupModel.cls_updatedat
    }
  }
}