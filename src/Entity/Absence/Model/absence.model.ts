import {absence} from "@prisma/client";
import {StudentModel} from "../../Student/Model/student.model";
import {LessonModel} from "../../Lesson/Model/lesson.model";

export class AbsenceModel implements absence {
    abs_id: number;
    abs_student: number;
    abs_lesson: number;
    abs_createdat: Date;
    abs_updatedat: Date;

    student?: StudentModel;
    lesson?: LessonModel;

}