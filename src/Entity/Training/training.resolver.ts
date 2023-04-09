import {TrainingModel} from "./Model/training.model";
import {TrainingService} from "./training.service";
import {TrainingDto} from "./Dto/training.dto";

const trainingService: TrainingService = new TrainingService();
export const TrainingResolver = {
    trainings: async (): Promise<Array<TrainingDto>> => {
        const trainingsModel: Array<TrainingModel> = await trainingService.getAll();
        return trainingsModel.map((training) => TrainingDto.Load(training));
    },
    training: async ({id}: { id: number }): Promise<TrainingDto> => {
        const trainingModel: TrainingModel = await trainingService.getOne(+id);
        return TrainingDto.Load(trainingModel);
    },
    addTraining: async ({training}: { training: TrainingDto }): Promise<TrainingDto> => {
        const trainingModel: TrainingModel = await trainingService.create(training);
        return TrainingDto.Load(trainingModel);
    },
    updateTraining: async ({training}: { training: TrainingDto }): Promise<TrainingDto> => {
        const trainingModel: TrainingModel = await trainingService.update(training);
        return TrainingDto.Load(trainingModel);
    },
    deleteTraining: async ({id}: { id: number }) => {
        const trainingModel: TrainingModel = await trainingService.delete(+id);
        return trainingModel.tra_id > 0;
    }
}