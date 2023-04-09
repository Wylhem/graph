import {training} from "@prisma/client";
import {EstablishmentModel} from "../../Establishment/Model/establishment.model";
import {TrainingSessionModel} from "../../TrainingSession/Model/training_session.model";
import {TrainingFamilyModel} from "../../TrainingFamily/Model/training_family.model";

export class TrainingModel implements training {

    tra_id: number;
    tra_publicname: string;
    tra_name: string;
    tra_establishment: number;
    tra_createdat: Date;
    tra_updatedat: Date;
    tra_trainingfamily: number;

    training_family?: TrainingFamilyModel;
    establishment?: EstablishmentModel;

    training_session?: Array<TrainingSessionModel>

}