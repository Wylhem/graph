import {BaseDto} from "../../../Base/base.dto";
import {EstablishmentDto} from "../../Establishment/Dto/establishment.dto";
import {TrainingModel} from "../Model/training.model";
import {TrainingSessionDto} from "../../TrainingSession/Dto/training_session.dto";
import {TrainingFamilyDto} from "../../TrainingFamily/Dto/training_family.dto";

export class TrainingDto extends BaseDto {
  publicName: string;
  name: string;
  establishment?: EstablishmentDto;

  trainingSession?: Array<TrainingSessionDto>

  trainingFamily?: TrainingFamilyDto;

  public static Load(trainingModel: TrainingModel): TrainingDto {
    return {
      id: trainingModel.tra_id,
      publicName: trainingModel.tra_publicname,
      name: trainingModel.tra_name,
      establishment: trainingModel.establishment ? EstablishmentDto.Load(trainingModel.establishment) : null,
      trainingSession: trainingModel.training_session ? trainingModel.training_session.map((trainingSession) => TrainingSessionDto.Load(trainingSession)) : null,
      trainingFamily: trainingModel.training_family ? TrainingFamilyDto.Load(trainingModel.training_family) : null,

      createdAt: trainingModel.tra_createdat,
      updatedAt: trainingModel.tra_updatedat,
    }
  }

}