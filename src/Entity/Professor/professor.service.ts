import {BaseService} from "../../Base/base.service";
import {ProfessorModel} from "./Model/professor.model";
import {prisma} from "../../Prisma/prisma";
import {ProfessorDto} from "./Dto/professor.dto";

export class ProfessorService extends BaseService {
    constructor() {
        super();
    }

    public async getProfessors(): Promise<Array<ProfessorModel>> {
        return await prisma.professor.findMany({
            include: {
                person: true
            }
        });
    }

    public async getProfessor(id: number): Promise<ProfessorModel> {
        return await prisma.professor.findFirst({
            where: {
                pro_id: id
            },
            include: {
                person: true
            }
        })
    }

    public async createProfessor(professorDto: ProfessorDto): Promise<ProfessorModel> {
        return await prisma.professor.create({
            data: {
                pro_person: +professorDto.person.id
            },
            include: {
                person: true
            }
        })
    }

    public async updateProfessor(professorDto: ProfessorDto): Promise<ProfessorModel> {
        return await prisma.professor.update({
            where: {
                pro_id: +professorDto.id
            },
            data: {
                pro_person: +professorDto.person.id,
                pro_updatedat: this.getCurrentTime(),
            },
            include: {
                person: true
            }
        })
    }

    public async deleteProfessor(id: number): Promise<ProfessorModel> {
        return await prisma.professor.delete({
            where: {
                pro_id: id
            }
        })
    }
}