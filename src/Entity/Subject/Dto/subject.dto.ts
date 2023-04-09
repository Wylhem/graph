import {BaseDto} from "../../../Base/base.dto";
import {TrainingSessionDto} from "../../TrainingSession/Dto/training_session.dto";
import {LessonDto} from "../../Lesson/Dto/lesson.dto";
import {SubjectModel} from "../Model/subject.model";
import {ExamDto} from "../../Exam/Dto/exam.dto";

export class SubjectDto extends BaseDto {
  label: string;
  trainingSession?: TrainingSessionDto;
  lessons?: Array<LessonDto>;
  exams?: Array<ExamDto>;

  public static Load(subjectModel: SubjectModel): SubjectDto {
    return {
      id: subjectModel.sub_id,
      label: subjectModel.sub_label,
      trainingSession: subjectModel.training_session ? TrainingSessionDto.Load(subjectModel.training_session) : null,
      lessons: subjectModel.lesson ? subjectModel.lesson.map((lesson) => LessonDto.Load(lesson)) : null,
      exams: subjectModel.exam ? subjectModel.exam.map((exam) => ExamDto.Load(exam)) : null,
      createdAt: subjectModel.sub_createdat,
      updatedAt: subjectModel.sub_updatedat,
    }
  }
}