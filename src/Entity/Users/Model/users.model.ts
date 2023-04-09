import { users } from "@prisma/client";
import {PersonModel} from "../../Person/Model/person.model";
import {Profile} from "../../Profile/Model/profile.model";

export class UsersModel implements users {
    usr_id: number;
    usr_email: string;
    usr_createdat: Date;
    usr_updatedat: Date;
    usr_person: number;
    usr_profile: number;
    person?: PersonModel;
    profile?: Profile;

}