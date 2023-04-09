import {professor} from "@prisma/client";
import {PersonModel} from "../../Person/Model/person.model";

export class ProfessorModel implements professor {
    pro_id: number;
    pro_person: number;
    pro_createdat: Date;
    pro_updatedat: Date;
    person?: PersonModel;

}