import {AbsenceService} from "./absence.service";
import {AbsenceDto} from "./Dto/absence.dto";
import {AbsenceModel} from "./Model/absence.model";

const absenceService: AbsenceService = new AbsenceService();
export const AbsenceResolver = {
    absences: async (): Promise<Array<AbsenceDto>> => {
        const absencesModels: Array<AbsenceModel> = await absenceService.getAll();
        return absencesModels.map((absence) => AbsenceDto.Load(absence));
    },
    absence: async ({id}: { id: number }): Promise<AbsenceDto> => {
        const absenceModel: AbsenceModel = await absenceService.getOne(+id);
        return AbsenceDto.Load(absenceModel);
    },
    addAbsence: async ({absence}: { absence: AbsenceDto }): Promise<AbsenceDto> => {
        const absenceModel: AbsenceModel = await absenceService.create(absence);
        return AbsenceDto.Load(absenceModel);
    },
    updateAbsence: async ({absence}: { absence: AbsenceDto }): Promise<AbsenceDto> => {
        const absenceModel: AbsenceModel = await absenceService.update(absence);
        return AbsenceDto.Load(absenceModel);
    },
    deleteAbsence: async ({id}: { id: number }): Promise<boolean> => {
        const absenceModel: AbsenceModel = await absenceService.delete(+id);
        return absenceModel.abs_id > 0;
    },

}