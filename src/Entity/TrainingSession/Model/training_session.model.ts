import {training_session} from "@prisma/client";
import {TrainingModel} from "../../Training/Model/training.model";
import {SubjectModel} from "../../Subject/Model/subject.model";

export class TrainingSessionModel implements training_session {
  trs_id: number;
  trs_publicname: string;
  trs_name: string;
  trs_entryyear: number;
  trs_endyear: number;
  trs_training: number;
  trs_createdat: Date;
  trs_updatedat: Date;

  training?: TrainingModel;
  subject?: Array<SubjectModel>;

}