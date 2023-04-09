import {ClassesService} from "./classes.service";
import {ClassesDto} from "./Dto/classes.dto";
import {ClassesModel} from "./Model/classes.model";

const classesService: ClassesService = new ClassesService();
export const ClassesResolver = {
    classes: async (): Promise<Array<ClassesDto>> => {
        const classes: Array<ClassesModel> = await classesService.getAll();
        return classes.map((classModel) => ClassesDto.Load(classModel));
    },
    classOne: async ({id}: { id: number }): Promise<ClassesDto> => {
        const classModel: ClassesModel = await classesService.getOne(+id);
        return ClassesDto.Load(classModel);
    },
    addClass: async ({classInput}: { classInput: ClassesDto }): Promise<ClassesDto> => {
        const classModel: ClassesModel = await classesService.create(classInput);
        return ClassesDto.Load(classModel);
    },
    updateClass: async ({classInput}: { classInput: ClassesDto }): Promise<ClassesDto> => {
        const classModel: ClassesModel = await classesService.update(classInput);
        return ClassesDto.Load(classModel);
    },
    deleteClass: async ({id}: { id: number }): Promise<boolean> => {
        const classModel: ClassesModel = await classesService.delete(+id);
        return classModel.cls_id > 0;
    }

}