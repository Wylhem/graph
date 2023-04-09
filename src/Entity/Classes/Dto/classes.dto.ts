import {BaseDto} from "../../../Base/base.dto";
import {TrainingSessionDto} from "../../TrainingSession/Dto/training_session.dto";
import {GroupesDto} from "../../groupes/Dto/groupes.dto";
import {ClassesModel} from "../Model/classes.model";

export class ClassesDto extends BaseDto {

  label: string;
  trainingSession?: TrainingSessionDto;
  groups?: Array<GroupesDto>;

  public static Load(classModel: ClassesModel): ClassesDto {
    return {
      id: classModel.cls_id,
      label: classModel.cls_label,
      trainingSession: classModel?.training_session ? TrainingSessionDto.Load((classModel.training_session)) : null,
      groups: classModel?.groupes ? classModel.groupes.map((group) => GroupesDto.Load(group)) : null,
      createdAt: classModel.cls_createdat,
      updatedAt: classModel.cls_updatedat,
    }
  }
}