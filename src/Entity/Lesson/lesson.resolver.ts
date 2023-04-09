import {LessonService} from "./lesson.service";
import {LessonDto} from "./Dto/lesson.dto";
import {LessonModel} from "./Model/lesson.model";
import {StudentDto} from "../Student/Dto/student.dto";

const lessonService: LessonService = new LessonService();

export const LessonResolver = {
  lessons: async (): Promise<Array<LessonDto>> => {
    const lessons: Array<LessonModel> = await lessonService.getAll();
    const lesson = new LessonDto();
    const lessonDto = lessons.map((lesson) => LessonDto.Load(lesson));
    debugger;
    return lessonDto;
  },
  lesson: async ({id}: { id: number }): Promise<LessonDto> => {
    const lesson: LessonModel = await lessonService.getOne(+id);
    return LessonDto.Load(lesson);
  },
  nextLessons: async ({student}: { student: StudentDto }): Promise<Array<LessonDto>> => {
    const lessons: Array<LessonModel> = await lessonService.getNextLessons(student);
    return lessons.map((lesson) => LessonDto.Load(lesson));
  },
  addLesson: async ({lesson}: { lesson: LessonDto }): Promise<LessonDto> => {
    const lessonModel: LessonModel = await lessonService.create(lesson);
    return LessonDto.Load(lessonModel);
  },
  updateLesson: async ({lesson}: { lesson: LessonDto }): Promise<LessonDto> => {
    const lessonModel: LessonModel = await lessonService.update(lesson);
    return LessonDto.Load(lessonModel);
  },
  deleteLesson: async ({id}: { id: number }): Promise<Boolean> => {
    const lesson: LessonModel = await lessonService.getOne(+id);
    return lesson.les_id > 0;
  },

}