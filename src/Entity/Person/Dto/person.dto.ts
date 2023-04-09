import {BaseDto} from "../../../Base/base.dto";
import {PersonModel} from "../Model/person.model";

export class PersonDto extends BaseDto {
    firstname: string;
    lastname: string;

    public static Load(personModel: PersonModel): PersonDto {
        return {
            id: personModel.per_id,
            firstname: personModel.per_firstname,
            lastname: personModel.per_lastname,
            createdAt: personModel.per_createdat,
            updatedAt: personModel.per_updatedat,
        }
    }
}