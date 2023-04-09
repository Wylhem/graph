import {BaseService} from "../../Base/base.service";
import {LessonModel} from "./Model/lesson.model";
import {prisma} from "../../Prisma/prisma";
import {LessonDto} from "./Dto/lesson.dto";
import {StudentDto} from "../Student/Dto/student.dto";

export class LessonService extends BaseService {
  constructor() {
    super();
  }

  public async getAll(): Promise<Array<LessonModel>> {
    return await prisma.lesson.findMany({
      include: {
        subject: true,
        professor: {
          include: {
            person: true,
          }
        },
        groupes: {
          include: {
            student: {
              include: {
                person: true,
              }
            }
          }
        },
        classroom: {
          include: {
            establishment: true,
          }
        },
        absence: {
          include: {
            student: {
              include: {
                person: true,
              }
            }
          }
        }
      }
    })
  }

  public async getOne(id: number): Promise<LessonModel> {
    return await prisma.lesson.findFirst({
      where: {
        les_id: id
      },
      include: {
        subject: true,
        professor: {
          include: {
            person: true,
          }
        },
        classroom: {
          include: {
            establishment: true,
          }
        },
        groupes: {
          include: {
            student: {
              include: {
                person: true,
              }
            }
          }
        },
        absence: {
          include: {
            student: {
              include: {
                person: true,
              }
            }
          }
        }
      }
    })
  }

  public async create(lesson: LessonDto): Promise<LessonModel> {
    return await prisma.lesson.create({
      data: {
        les_scheduleStart: new Date(lesson.scheduleStart),
        les_scheduleEnd: new Date(lesson.scheduleEnd),
        les_classroom: +lesson.classroom.id,
        les_subject: +lesson.subject.id,
        les_groupes: +lesson.groups.id,
        les_professor: +lesson.professor.id,
      },
      include: {
        subject: true,
        professor: {
          include: {
            person: true,
          }
        },
        classroom: {
          include: {
            establishment: true,
          }
        },
        groupes: {
          include: {
            student: {
              include: {
                person: true,
              }
            }
          }
        },
      }
    })
  }

  public async update(lesson: LessonDto): Promise<LessonModel> {
    return await prisma.lesson.update({
      where: {
        les_id: +lesson.id,
      },
      data: {
        les_scheduleStart: lesson.scheduleStart,
        les_scheduleEnd: lesson.scheduleEnd,
        les_classroom: +lesson.classroom.id,
        les_subject: +lesson.subject.id,
        les_groupes: +lesson.groups.id,
        les_professor: +lesson.professor,
        les_updatedat: this.getCurrentTime(),
      },
      include: {
        subject: true,
        professor: {
          include: {
            person: true,
          }
        },
        classroom: {
          include: {
            establishment: true,
          }
        },
        groupes: {
          include: {
            student: {
              include: {
                person: true,
              }
            }
          }
        },
        absence: {
          include: {
            student: {
              include: {
                person: true,
              }
            }
          }
        },
      }
    })
  }

  public async delete(id: number): Promise<LessonModel> {
    return await prisma.lesson.delete({
      where: {
        les_id: id
      }
    })
  }

  public async getNextLessons(student: StudentDto): Promise<Array<LessonModel>> {
    return await prisma.lesson.findMany({
      where: {
        groupes: {
          student: {
            some: {
              std_id: +student.id
            }
          }
        },
        les_scheduleStart: {
          gte: this.getCurrentTime()
        }
      },
      include: {
        subject: true,
        professor: {
          include: {
            person: true
          }
        },
        classroom: {
          include: {
            establishment: true,
          }
        },
        groupes: true
      }
    })
  }
}