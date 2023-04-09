import {ClassroomService} from "./classroom.service";
import {ClassroomModel} from "./Model/classroom.model";
import {ClassroomDto} from "./Dto/classroom.dto";

const classroomService: ClassroomService = new ClassroomService();
export const ClassroomResolver = {
  classrooms: async (): Promise<Array<ClassroomDto>> => {
    const classrooms: Array<ClassroomModel> = await classroomService.getAll();
    return classrooms.map((classroom) => ClassroomDto.Load(classroom));
  },
  classroom: async ({id}: { id: number }): Promise<ClassroomDto> => {
    const classroom: ClassroomModel = await classroomService.getOne(+id);
    return ClassroomDto.Load(classroom);
  },
  addClassroom: async ({classroom}: { classroom: ClassroomDto }): Promise<ClassroomDto> => {
    const classroomModel: ClassroomModel = await classroomService.create(classroom);
    return ClassroomDto.Load(classroomModel);
  },
  updateClassroom: async ({classroom}: { classroom: ClassroomDto }): Promise<ClassroomDto> => {
    const classroomModel: ClassroomModel = await classroomService.update(classroom);
    return ClassroomDto.Load(classroomModel);
  },
  deleteClassroom: async ({id}: { id: number }): Promise<boolean> => {
    const classroom: ClassroomModel = await classroomService.delete(+id);
    return classroom.clr_id > 0;
  },

}