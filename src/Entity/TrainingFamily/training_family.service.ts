import {BaseService} from "../../Base/base.service";
import {TrainingFamilyModel} from "./Model/training_family.model";
import {prisma} from "../../Prisma/prisma";
import {TrainingFamilyDto} from "./Dto/training_family.dto";

export class TrainingFamilyService extends BaseService {
    constructor() {
        super();
    }

    public async getAll(): Promise<Array<TrainingFamilyModel>> {
        return await prisma.training_family.findMany({
            include: {
                training: true,
            }
        })
    }

    public async getOne(id: number): Promise<TrainingFamilyModel> {
        return await prisma.training_family.findFirst({
            where: {
                trf_id: id
            },
            include: {
                training: true,
            }
        })
    }

    public async create(trainingFamily: TrainingFamilyDto): Promise<TrainingFamilyModel> {
        return await prisma.training_family.create({
            data: {
                trf_label: trainingFamily.label,

            }
        })
    }

    public async update(trainingFamily: TrainingFamilyDto): Promise<TrainingFamilyModel> {
        return await prisma.training_family.update({
            where: {
                trf_id: +trainingFamily.id
            },
            data: {
                trf_label: trainingFamily.label,
                trf_updatedat: this.getCurrentTime(),
            },
            include: {
                training: true,
            }
        })
    }

    public async delete(id: number): Promise<TrainingFamilyModel> {
        return await prisma.training_family.delete({
            where: {
                trf_id: id
            }
        })
    }
}