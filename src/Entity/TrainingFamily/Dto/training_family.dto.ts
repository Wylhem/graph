import {BaseDto} from "../../../Base/base.dto";
import {TrainingDto} from "../../Training/Dto/training.dto";
import {TrainingFamilyModel} from "../Model/training_family.model";

export class TrainingFamilyDto extends BaseDto {
  label: string;

  trainings?: Array<TrainingDto>

  public static Load(trainingFamily: TrainingFamilyModel): TrainingFamilyDto {
    return {
      id: trainingFamily.trf_id,
      label: trainingFamily.trf_label,
      trainings: trainingFamily.training ? trainingFamily.training?.map((training) => TrainingDto.Load(training)) : null,
      createdAt: trainingFamily.trf_createdat,
      updatedAt: trainingFamily.trf_updatedat,
    }
  }
}