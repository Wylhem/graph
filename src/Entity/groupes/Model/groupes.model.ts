import {groupes} from "@prisma/client";
import {StudentModel} from "../../Student/Model/student.model";
import {ClassesModel} from "../../Classes/Model/classes.model";
import {LessonModel} from "../../Lesson/Model/lesson.model";

export class GroupesModel implements groupes {
    grp_id: number;
    grp_label: string;
    grp_classes: number;
    cls_createdat: Date;
    cls_updatedat: Date;
    student?: Array<StudentModel>

    classes?: ClassesModel;
    lesson?: Array<LessonModel>
}