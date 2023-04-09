import {SubjectService} from "./subject.service";
import {SubjectDto} from "./Dto/subject.dto";
import {SubjectModel} from "./Model/subject.model";

const subjectService: SubjectService = new SubjectService();
export const SubjectResolver = {
    subjects: async (): Promise<Array<SubjectDto>> => {
        const subjects: Array<SubjectModel> = await subjectService.getAll();
        return subjects.map((subject) => SubjectDto.Load(subject));
    },
    subject: async ({id}: { id: number }): Promise<SubjectDto> => {
        const subject: SubjectModel = await subjectService.getOne(+id);
        return SubjectDto.Load(subject);
    },
    addSubject: async ({subject}: { subject: SubjectDto }) => {
        const subjectModel: SubjectModel = await subjectService.create(subject);
        return SubjectDto.Load(subjectModel);
    },
    updateSubject: async ({subject}: { subject: SubjectDto }) => {
        const subjectModel: SubjectModel = await subjectService.update(subject);
        return SubjectDto.Load(subjectModel);
    },
    deleteSubject: async ({id}: { id: number }): Promise<Boolean> => {
        const subject: SubjectModel = await subjectService.getOne(+id);
        return subject.sub_id > 0;
    },
}