import {BaseService} from "../../Base/base.service";
import {prisma} from "../../Prisma/prisma";
import {TrainingModel} from "./Model/training.model";
import {TrainingDto} from "./Dto/training.dto";

export class TrainingService extends BaseService {
    constructor() {
        super();
    }

    public async getAll(): Promise<Array<TrainingModel>> {
        return await prisma.training.findMany({
            include: {
                establishment: true,
                training_session: true,
                training_family: true,
            }
        })
    }

    public async getOne(id: number): Promise<TrainingModel> {
        return await prisma.training.findFirst({
            where: {
                tra_id: id
            },
            include: {
                establishment: true,
                training_session: true,
                training_family: true,
            }
        })
    }

    public async create(trainingDto: TrainingDto): Promise<TrainingModel> {
        return await prisma.training.create({
            data: {
                tra_name: trainingDto.name,
                tra_publicname: trainingDto.publicName,
                tra_establishment: +trainingDto.establishment.id,
                tra_trainingfamily: +trainingDto.trainingFamily.id,
            },
            include: {
                establishment: true,
                training_session: true,
                training_family: true,
            }
        })
    }

    public async update(trainingDto: TrainingDto): Promise<TrainingModel> {
        return await prisma.training.update({
            where: {
                tra_id: +trainingDto.id
            },
            data: {
                tra_name: trainingDto.name,
                tra_publicname: trainingDto.publicName,
                tra_updatedat: this.getCurrentTime(),
                tra_establishment: +trainingDto.establishment.id,
                tra_trainingfamily: +trainingDto.trainingFamily.id,
            },
            include: {
                establishment: true,
                training_session: true,
                training_family: true,
            }
        })
    }

    public async delete(id: number): Promise<TrainingModel> {
        return await prisma.training.delete({
            where: {
                tra_id: id
            }
        })
    }
}