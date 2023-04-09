import {BaseService} from "../../Base/base.service";
import {ExamModel} from "./Model/exam.model";
import {prisma} from "../../Prisma/prisma";
import {ExamDto} from "./Dto/exam.dto";

export class ExamService extends BaseService {
  constructor() {
    super();
  }

  public async getAll(): Promise<Array<ExamModel>> {
    return await prisma.exam.findMany({
      include: {
        professor: {
          include: {
            person: true
          }
        },
        student: {
          include: {
            person: true,
          }
        },
        subject: true,
      }
    })
  }

  public async getOne(id: number): Promise<ExamModel> {
    return await prisma.exam.findFirst({
      where: {
        exm_id: id
      },
      include: {
        professor: {
          include: {
            person: true
          }
        },
        student: {
          include: {
            person: true,
          }
        },
        subject: true,
      }
    })
  }

  public async create(exam: ExamDto): Promise<ExamModel> {
    return await prisma.exam.create({
      data: {
        exm_grade: exam.grade,
        exm_date: new Date(exam.date),
        exm_student: +exam.student.id,
        exm_subject: +exam.subject.id,
        exm_professor: +exam.professor.id,
      },
      include: {
        professor: {
          include: {
            person: true
          }
        },
        student: {
          include: {
            person: true,
          }
        },
        subject: true,
      }
    })
  }

  public async update(exam: ExamDto): Promise<ExamModel> {
    return await prisma.exam.update({
      where: {
        exm_id: +exam.id
      },
      data: {
        exm_grade: exam.grade,
        exm_date: new Date(exam.date),
        exm_student: +exam.student.id,
        exm_subject: +exam.subject.id,
        exm_professor: +exam.professor.id,
        exm_updatedat: this.getCurrentTime(),
      },
      include: {
        professor: {
          include: {
            person: true
          }
        },
        student: {
          include: {
            person: true,
          }
        },
        subject: true,
      }
    })
  }

  public async delete(id: number): Promise<ExamModel> {
    return await prisma.exam.delete({
      where: {
        exm_id: id
      }
    })
  }
}