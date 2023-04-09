import {BaseService} from "../../Base/base.service";
import {TrainingSessionModel} from "./Model/training_session.model";
import {prisma} from "../../Prisma/prisma";
import {TrainingSessionDto} from "./Dto/training_session.dto";
import {SubjectDto} from "../Subject/Dto/subject.dto";

export class TrainingSessionService extends BaseService {
  constructor() {
    super();
  }

  public async getAll(): Promise<Array<TrainingSessionModel>> {
    return await prisma.training_session.findMany({
      include: {
        training: true,
        classes: true,
        subject: true,
      }
    })
  }

  public async getOne(id: number): Promise<TrainingSessionModel> {
    return await prisma.training_session.findFirst({
      where: {
        trs_id: id
      },
      include: {
        training: true,
        classes: true,
        subject: true,
      }
    })
  }

  public async create(trainingSession: TrainingSessionDto): Promise<TrainingSessionModel> {
    return await prisma.training_session.create({
      data: {
        trs_publicname: trainingSession.publicName,
        trs_name: trainingSession.name,
        trs_endyear: trainingSession.endYear,
        trs_entryyear: trainingSession.entryYear,
        trs_training: +trainingSession.training.id
      },
      include: {
        training: true,
        classes: true,
        subject: true,
      }
    })
  }

  public async connectSubjects(subjects: Array<SubjectDto>, trainingSession: TrainingSessionDto): Promise<TrainingSessionModel> {
    const ids = subjects.map((subject) => {
      return {sub_id: +subject.id}
    })
    return await prisma.training_session.update({
      where: {
        trs_id: +trainingSession.id,
      },
      data: {
        trs_updatedat: this.getCurrentTime(),
        subject: {
          connect: [...ids]
        }
      },
      include: {
        training: true,
        classes: true,
        subject: true,
      }
    })
  }

  public async disconnectSubjects(subjects: Array<SubjectDto>, trainingSession: TrainingSessionDto): Promise<TrainingSessionModel> {
    const ids = subjects.map((subject) => {
      return {sub_id: +subject.id}
    })
    return await prisma.training_session.update({
      where: {
        trs_id: +trainingSession.id,
      },
      data: {
        trs_updatedat: this.getCurrentTime(),
        subject: {
          disconnect: [...ids]
        }
      },
      include: {
        training: true,
        classes: true,
        subject: true,
      }
    })
  }


  public async update(trainingSession: TrainingSessionDto): Promise<TrainingSessionModel> {
    return await prisma.training_session.update({
      where: {
        trs_id: +trainingSession.id
      },
      data: {
        trs_publicname: trainingSession.publicName,
        trs_name: trainingSession.name,
        trs_endyear: trainingSession.endYear,
        trs_entryyear: trainingSession.entryYear,
        trs_training: +trainingSession.training.id,
        trs_updatedat: this.getCurrentTime(),
      },
      include: {
        training: true,
        classes: true,
        subject: true,
      }
    })
  }

  public async delete(id: number): Promise<TrainingSessionModel> {
    return await prisma.training_session.delete({
      where: {
        trs_id: id
      }
    })
  }

}