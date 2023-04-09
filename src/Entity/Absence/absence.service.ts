import {BaseService} from "../../Base/base.service";
import {AbsenceModel} from "./Model/absence.model";
import {prisma} from "../../Prisma/prisma";
import {AbsenceDto} from "./Dto/absence.dto";

export class AbsenceService extends BaseService {
    constructor() {
        super();
    }

    public async getAll(): Promise<Array<AbsenceModel>> {
        return await prisma.absence.findMany({
            include: {
                student: {
                    include: {
                        person: true
                    }
                },
                lesson: true,
            }
        })
    }

    public async getOne(id: number): Promise<AbsenceModel> {
        return await prisma.absence.findFirst({
            where: {
                abs_id: id
            },
            include: {
                student: {
                    include: {
                        person: true
                    }
                },
                lesson: true,
            }
        })
    }

    public async create(absence: AbsenceDto): Promise<AbsenceModel> {
        return await prisma.absence.create({
            data: {
                abs_student: +absence.student.id,
                abs_lesson: +absence.lesson.id,
            },
            include: {
                student: {
                    include: {
                        person: true
                    }
                },
                lesson: true,
            }
        })
    }

    public async update(absence: AbsenceDto): Promise<AbsenceModel> {
        return await prisma.absence.update({
            where: {
                abs_id: +absence.id,
            },
            data: {
                abs_student: +absence.student.id,
                abs_lesson: +absence.lesson.id,
            },
            include: {
                student: {
                    include: {
                        person: true
                    }
                },
                lesson: true,
            }
        })
    }

    public async delete(id: number): Promise<AbsenceModel> {
        return await prisma.absence.delete({
            where: {
                abs_id: id,
            }
        })
    }
}