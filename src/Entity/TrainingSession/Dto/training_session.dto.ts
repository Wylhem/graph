import {BaseDto} from "../../../Base/base.dto";
import {TrainingSessionModel} from "../Model/training_session.model";
import {TrainingDto} from "../../Training/Dto/training.dto";
import {SubjectDto} from "../../Subject/Dto/subject.dto";

export class TrainingSessionDto extends BaseDto {
  publicName: string;
  name: string;
  entryYear: number;
  endYear: number;
  training?: TrainingDto;
  subjects?: Array<SubjectDto>;

  public static Load(trainingSession: TrainingSessionModel): TrainingSessionDto {
    return {
      id: trainingSession.trs_id,
      publicName: trainingSession.trs_publicname,
      name: trainingSession.trs_name,
      entryYear: trainingSession.trs_entryyear,
      endYear: trainingSession.trs_endyear,
      training: trainingSession.training ? TrainingDto.Load(trainingSession.training) : null,
      subjects: trainingSession.subject ? trainingSession.subject.map((subject) => SubjectDto.Load(subject)) : null,
      createdAt: trainingSession.trs_createdat,
      updatedAt: trainingSession.trs_updatedat,
    }
  }
}