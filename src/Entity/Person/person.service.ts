import {BaseService} from "../../Base/base.service";
import {PersonDto} from "./Dto/person.dto";
import {PersonModel} from "./Model/person.model";
import {prisma} from "../../Prisma/prisma";

export class PersonService extends BaseService{
    constructor() {
        super();
    }
    public async getPersons(): Promise<Array<PersonModel>> {
        return await prisma.person.findMany();
    }
    public async getPerson(id: number):Promise<PersonModel> {
        return await prisma.person.findFirst({
            where: {
                per_id: id,
            }
        })
    }
    public async addPerson(personDto: PersonDto): Promise<PersonModel> {
        return  await  prisma.person.create({
            data: {
                per_firstname: personDto.firstname,
                per_lastname: personDto.lastname,

            }
        })
    }
    public async updatePerson(personDto: PersonDto): Promise<PersonModel> {
        return  await prisma.person.update({
            data : {
                per_firstname: personDto.firstname,
                per_lastname: personDto.lastname,
                per_updatedat: this.getCurrentTime(),
            },
            where: {
                per_id: +personDto.id
            }
        })
    }
    public  async deletePerson(id: number): Promise<PersonModel> {
        return await prisma.person.delete({
            where: {
                per_id: id
            },
        })
    }
}