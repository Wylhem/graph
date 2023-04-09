import {ExamService} from "./exam.service";
import {ExamDto} from "./Dto/exam.dto";
import {ExamModel} from "./Model/exam.model";

const examService: ExamService = new ExamService();
export const ExamResolver = {
    exams: async (): Promise<Array<ExamDto>> => {
        const examModels: Array<ExamModel> = await examService.getAll();
        return examModels.map((exam) => ExamDto.Load(exam));
    },
    exam: async ({id}: { id: number }): Promise<ExamDto> => {
        const examModel: ExamModel = await examService.getOne(+id);
        return ExamDto.Load(examModel);
    },
    addExam: async ({exam}: { exam: ExamDto }): Promise<ExamDto> => {
        const examModel: ExamModel = await examService.create(exam);
        return ExamDto.Load(examModel);
    },
    updateExam: async ({exam}: { exam: ExamDto }): Promise<ExamDto> => {
        const examModel: ExamModel = await examService.update(exam);
        return ExamDto.Load(examModel);
    },
    deleteExam: async ({id}: { id: number }): Promise<boolean> => {
        const examModel: ExamModel = await examService.delete(+id);
        return examModel.exm_id > 0;
    },
}