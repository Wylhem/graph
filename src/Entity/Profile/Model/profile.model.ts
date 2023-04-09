import { profile } from "@prisma/client";

export class Profile implements profile{
    prf_id: number;
    prf_label: string;
    prf_createdat: Date;
    prf_updatedat: Date;

}