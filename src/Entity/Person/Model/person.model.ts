import { person } from "@prisma/client";

export class PersonModel implements person{
    per_id: number;
    per_firstname: string;
    per_lastname: string;
    per_createdat: Date;
    per_updatedat: Date;
    
}