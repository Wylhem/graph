import {classroom} from "@prisma/client";
import {EstablishmentModel} from "../../Establishment/Model/establishment.model";
import {LessonModel} from "../../Lesson/Model/lesson.model";

export class ClassroomModel implements classroom {
  cls_updatedat: Date;
  clr_id: number;
  clr_label: string;
  clr_establishment: number;
  clr_createdat: Date;


  establishment?: EstablishmentModel;
  lesson?: Array<LessonModel>;

}