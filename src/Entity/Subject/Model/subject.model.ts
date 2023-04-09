import {subject} from "@prisma/client";
import {TrainingSessionModel} from "../../TrainingSession/Model/training_session.model";
import {LessonModel} from "../../Lesson/Model/lesson.model";
import {ExamModel} from "../../Exam/Model/exam.model";

export class SubjectModel implements subject {
    sub_id: number;
    sub_label: string;
    sub_trainingsession: number;
    sub_createdat: Date;
    sub_updatedat: Date;

    training_session?: TrainingSessionModel;
    lesson?: Array<LessonModel>;
    exam?: Array<ExamModel>;

}