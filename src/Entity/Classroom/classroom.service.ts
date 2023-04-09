import {BaseService} from "../../Base/base.service";
import {prisma} from "../../Prisma/prisma";
import {ClassroomModel} from "./Model/classroom.model";
import {ClassroomDto} from "./Dto/classroom.dto";

export class ClassroomService extends BaseService {
  constructor() {
    super();
  }

  public async getAll(): Promise<Array<ClassroomModel>> {
    return await prisma.classroom.findMany({
      include: {
        establishment: true,
        lesson: true
      }
    });
  }

  public async getOne(id: number): Promise<ClassroomModel> {
    return await prisma.classroom.findFirst({
      where: {
        clr_id: id
      },
      include: {
        establishment: true,
        lesson: true
      }
    })
  }

  public async create(classroom: ClassroomDto): Promise<ClassroomModel> {
    return await prisma.classroom.create({
      data: {
        clr_label: classroom.label,
        clr_establishment: +classroom.establishment.id,
      },
      include: {
        establishment: true,
      }
    })
  }

  public async update(classroom: ClassroomDto): Promise<ClassroomModel> {
    return await prisma.classroom.update({
      where: {
        clr_id: +classroom.id
      },
      data: {
        clr_label: classroom.label
      },
      include: {
        establishment: true,
      }
    })
  }

  public async delete(id: number): Promise<ClassroomModel> {
    return await prisma.classroom.delete({
      where: {
        clr_id: id
      }
    })
  }
}