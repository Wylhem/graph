import {BaseService} from "../../Base/base.service";
import {prisma} from "../../Prisma/prisma";
import {ClassesDto} from "./Dto/classes.dto";
import {ClassesModel} from "./Model/classes.model";

export class ClassesService extends BaseService {
  constructor() {
    super();
  }

  public async getAll(): Promise<Array<ClassesModel>> {
    return await prisma.classes.findMany({
      include: {
        training_session: true,
        groupes: {
          include: {
            student: {
              include: {
                person: true
              }
            }
          }
        },
      }
    })
  }

  public async getOne(id: number): Promise<ClassesModel> {
    return await prisma.classes.findFirst({
      where: {
        cls_id: id
      },
      include: {
        training_session: true,
        groupes: {
          include: {
            student: {
              include: {
                person: true
              }
            }
          }
        },
      }
    })
  }

  public async create(classDto: ClassesDto): Promise<ClassesModel> {
    return await prisma.classes.create({
      data: {
        cls_label: classDto.label,
        cls_trainingsession: +classDto.trainingSession.id
      },
      include: {
        training_session: true,

      }
    })
  }

  public async update(classDto: ClassesDto): Promise<ClassesModel> {
    return await prisma.classes.update({
      where: {
        cls_id: +classDto.id
      },
      data: {
        cls_label: classDto.label,
        cls_trainingsession: +classDto.trainingSession.id,
        cls_updatedat: this.getCurrentTime(),
      },
      include: {
        training_session: true,
        groupes: {
          include: {
            student: {
              include: {
                person: true
              }
            }
          }
        },
      }
    })
  }

  public async delete(id: number): Promise<ClassesModel> {
    return await prisma.classes.delete({
      where: {
        cls_id: id
      }
    })
  }

}