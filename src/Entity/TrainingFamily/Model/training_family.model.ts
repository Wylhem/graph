import {training_family} from "@prisma/client";
import {TrainingModel} from "../../Training/Model/training.model";

export class TrainingFamilyModel implements training_family {
    trf_id: number;
    trf_label: string;
    trf_createdat: Date;
    trf_updatedat: Date;

    training?: Array<TrainingModel>
}