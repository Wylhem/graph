import {ProfessorModel} from "./Model/professor.model";
import {ProfessorService} from "./professor.service";
import {ProfessorDto} from "./Dto/professor.dto";

const professorService: ProfessorService = new ProfessorService();
export const ProfessorResolver = {
    professors: async (): Promise<Array<ProfessorDto>> => {
        const professorModels: Array<ProfessorModel> = await professorService.getProfessors();
        return professorModels.map((professorModel) => ProfessorDto.Load(professorModel));
    },
    professor: async ({id}: { id: number }): Promise<ProfessorDto> => {
        const professorModel: ProfessorModel = await professorService.getProfessor(+id);
        return ProfessorDto.Load(professorModel);
    },
    addProfessor: async ({professor}: { professor: ProfessorDto }): Promise<ProfessorDto> => {
        const professorModel: ProfessorModel = await professorService.createProfessor(professor);
        return ProfessorDto.Load(professorModel);
    },
    updateProfessor: async ({professor}: { professor: ProfessorDto }): Promise<ProfessorDto> => {
        const professorModel: ProfessorModel = await professorService.updateProfessor(professor);
        return ProfessorDto.Load(professorModel);
    },
    deleteProfessor: async ({id}: { id: number }): Promise<boolean> => {
        const professorModel: ProfessorModel = await professorService.deleteProfessor(+id);
        return professorModel.pro_id > 0;
    }
}