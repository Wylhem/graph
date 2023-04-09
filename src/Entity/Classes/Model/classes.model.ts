import {classes} from "@prisma/client";
import {TrainingSessionModel} from "../../TrainingSession/Model/training_session.model";
import {GroupesModel} from "../../groupes/Model/groupes.model";

export class ClassesModel implements classes {
    cls_id: number;
    cls_label: string;
    cls_trainingsession: number;
    cls_createdat: Date;
    cls_updatedat: Date;

    training_session?: TrainingSessionModel;

    groupes?: Array<GroupesModel>;

}