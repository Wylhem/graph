import {exam} from "@prisma/client";
import {StudentModel} from "../../Student/Model/student.model";
import {ProfessorModel} from "../../Professor/Model/professor.model";
import {SubjectModel} from "../../Subject/Model/subject.model";

export class ExamModel implements exam {
    exm_id: number;
    exm_grade: number;
    exm_date: Date;
    exm_student: number;
    exm_professor: number;
    exm_subject: number;
    exm_createdat: Date;
    exm_updatedat: Date;

    student?: StudentModel;
    professor?: ProfessorModel;
    subject?: SubjectModel;

}