import {establishment} from "@prisma/client";
import {TrainingModel} from "../../Training/Model/training.model";
import {ClassroomModel} from "../../Classroom/Model/classroom.model";

export class EstablishmentModel implements establishment {
    est_id: number;
    est_publicname: string;
    est_name: string;
    est_address: string;
    est_parentsite: number;
    est_createdat: Date;
    est_updatedat: Date;
    establishment?: EstablishmentModel;
    other_establishment?: Array<EstablishmentModel>;

    training?: Array<TrainingModel>;

    classroom?: Array<ClassroomModel>;

}