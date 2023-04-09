import {TrainingFamilyModel} from "./Model/training_family.model";
import {TrainingFamilyDto} from "./Dto/training_family.dto";
import {TrainingFamilyService} from "./training_family.service";


const trainingFamilyService: TrainingFamilyService = new TrainingFamilyService();
export const TrainingFamilyResolver = {
    trainingFamilies: async (): Promise<Array<TrainingFamilyDto>> => {
        const trainingFamilies: Array<TrainingFamilyModel> = await trainingFamilyService.getAll();
        return trainingFamilies?.map((training_family) => TrainingFamilyDto.Load(training_family));
    },
    trainingFamily: async ({id}: { id: number }): Promise<TrainingFamilyDto> => {
        const trainingFamily: TrainingFamilyModel = await trainingFamilyService.getOne(+id);
        return TrainingFamilyDto.Load(trainingFamily);
    },
    addTrainingFamily: async ({trainingFamily}: { trainingFamily: TrainingFamilyDto }): Promise<TrainingFamilyDto> => {
        const trainingFamilyModel: TrainingFamilyModel = await trainingFamilyService.create(trainingFamily);
        return TrainingFamilyDto.Load(trainingFamilyModel);
    },
    updateTrainingFamily: async ({trainingFamily}: {
        trainingFamily: TrainingFamilyDto
    }): Promise<TrainingFamilyDto> => {
        const trainingFamilyModel: TrainingFamilyModel = await trainingFamilyService.update(trainingFamily);
        return TrainingFamilyDto.Load(trainingFamilyModel);
    },
    deleteTrainingFamily: async ({id}: { id: number }): Promise<boolean> => {
        const trainingFamilyModel: TrainingFamilyModel = await trainingFamilyService.delete(+id);
        return trainingFamilyModel.trf_id > 0;
    }
}