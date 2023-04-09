import {SubjectModel} from "./Model/subject.model";
import {prisma} from "../../Prisma/prisma";
import {SubjectDto} from "./Dto/subject.dto";
import {BaseService} from "../../Base/base.service";

export class SubjectService extends BaseService {
  constructor() {
    super();
  }

  public async getAll(): Promise<Array<SubjectModel>> {
    return await prisma.subject.findMany({
      include: {
        training_session: true,
        lesson: true,
        exam: true,
      },
    })
  }

  public async getOne(id: number): Promise<SubjectModel> {
    return await prisma.subject.findFirst({
      where: {
        sub_id: +id
      },
      include: {
        training_session: true,
        lesson: true,
        exam: true,
      },
    })
  }

  public async create(subject: SubjectDto): Promise<SubjectModel> {
    return await prisma.subject.create({
      data: {
        sub_label: subject.label,
        sub_trainingsession: +subject.trainingSession.id,
      },
      include: {
        training_session: true,
      }
    })
  }

  public async update(subject: SubjectDto): Promise<SubjectModel> {
    return await prisma.subject.update({
      where: {
        sub_id: +subject.id
      },
      data: {
        sub_label: subject.label,
        sub_trainingsession: +subject.trainingSession.id,
        sub_updatedat: this.getCurrentTime(),
      },
      include: {
        training_session: true,
        lesson: true,
        exam: true
      }
    })
  }

  public async delete(id: number): Promise<SubjectModel> {
    return await prisma.subject.delete({
      where: {
        sub_id: id
      }
    })
  }
}