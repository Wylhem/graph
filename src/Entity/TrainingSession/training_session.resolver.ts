import {TrainingSessionModel} from "./Model/training_session.model";
import {TrainingSessionService} from "./training_session.service";
import {TrainingSessionDto} from "./Dto/training_session.dto";
import {SubjectDto} from "../Subject/Dto/subject.dto";

const trainingSessionsService: TrainingSessionService = new TrainingSessionService();
export const TrainingSessionResolver = {
  trainingSessions: async (): Promise<Array<TrainingSessionDto>> => {
    const trainingSessions: Array<TrainingSessionModel> = await trainingSessionsService.getAll();
    return trainingSessions.map((training_session) => TrainingSessionDto.Load(training_session));
  },
  trainingSession: async ({id}: { id: number }): Promise<TrainingSessionDto> => {
    const trainingSession: TrainingSessionModel = await trainingSessionsService.getOne(+id);
    return TrainingSessionDto.Load(trainingSession);
  },
  addTrainingSession: async ({trainingSession}: { trainingSession: TrainingSessionDto }) => {
    const trainingSessionModel: TrainingSessionModel = await trainingSessionsService.create(trainingSession);
    return TrainingSessionDto.Load(trainingSessionModel);
  },
  addSubjectTrainingSession: async ({subjects, trainingSession}: {
    subjects: Array<SubjectDto>,
    trainingSession: TrainingSessionDto
  }) => {
    const trainingSessionModel: TrainingSessionModel = await trainingSessionsService.connectSubjects(subjects, trainingSession);
    return TrainingSessionDto.Load(trainingSessionModel);
  },
  removeSubjectTrainingSession: async ({subjects, trainingSession}: {
    subjects: Array<SubjectDto>,
    trainingSession: TrainingSessionDto
  }) => {
    const trainingSessionModel: TrainingSessionModel = await trainingSessionsService.disconnectSubjects(subjects, trainingSession);
    return TrainingSessionDto.Load(trainingSessionModel);
  },
  updateTrainingSession: async ({trainingSession}: {
    trainingSession: TrainingSessionDto
  }): Promise<TrainingSessionDto> => {
    const trainingSessionModel: TrainingSessionModel = await trainingSessionsService.update(trainingSession);
    return TrainingSessionDto.Load(trainingSessionModel);
  },
  deleteTrainingSession: async ({id}: { id: number }): Promise<boolean> => {
    const trainingSessionModel: TrainingSessionModel = await trainingSessionsService.delete(+id);
    return trainingSessionModel.trs_id > 0;
  }
}