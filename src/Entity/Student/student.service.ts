import {BaseService} from "../../Base/base.service";
import {prisma} from "../../Prisma/prisma";
import {StudentModel} from "./Model/student.model";
import {StudentDto} from "./Dto/student.dto";

export class StudentService extends BaseService {
  constructor() {
    super();
  }

  public async getStudents(): Promise<Array<StudentModel>> {
    return await prisma.student.findMany({
      include: {
        person: true,
        groupes: true,
        absence: true,
        exam: true,
      }
    })
  }

  public async getStudent(id: number): Promise<StudentModel> {
    return await prisma.student.findFirst({
      where: {
        std_id: id
      },
      include: {
        person: true,
        groupes: true,
        absence: true,
        exam: true,
      }
    })
  }

  public async create(student: StudentDto): Promise<StudentModel> {
    return await prisma.student.create({
      data: {
        std_isineu: student.isInEu,
        std_disability: student.disability,
        std_scholarship: student.scholarship,
        std_person: +student.person.id,
      },
      include: {
        person: true,
      }

    })
  }

  public async update(student: StudentDto): Promise<StudentModel> {
    return await prisma.student.update({
      where: {
        std_id: +student.id
      },
      data: {
        std_isineu: student.isInEu,
        std_disability: student.disability,
        std_scholarship: student.scholarship,
        std_updatedat: this.getCurrentTime(),
      },
      include: {
        person: true,
        groupes: true,
        exam: true,
        absence: true,
      }
    })
  }

  public async delete(id: number): Promise<StudentModel> {
    return await prisma.student.delete({
      where: {
        std_id: id
      }
    })
  }

  public async average(idUser: number): Promise<{ studentModel: StudentModel, avg: any }> {
    const avg = await prisma.exam.aggregate({
      where: {
        exm_student: idUser,
      },
      _avg: {
        exm_grade: true,
      }
    })
    const studentModel = await prisma.student.findFirst({
      where: {
        std_id: idUser,
      },
      include: {
        exam: true,
        absence: true,
        person: true,
        groupes: true
      }
    })
    return {
      studentModel,
      avg,
    }
  }
}