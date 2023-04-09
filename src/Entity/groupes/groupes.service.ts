import {BaseService} from "../../Base/base.service";
import {prisma} from "../../Prisma/prisma";
import {GroupesDto} from "./Dto/groupes.dto";
import {StudentDto} from "../Student/Dto/student.dto";
import {GroupesModel} from "./Model/groupes.model";

export class GroupesService extends BaseService {
    constructor() {
        super();
    }

    public async getGroups(): Promise<Array<GroupesModel>> {
        return await prisma.groupes.findMany({
            include: {
                student: {
                    include: {
                        person: true,
                    }
                },
                classes: true,
            }
        })
    }

    public async getOne(id: number): Promise<GroupesModel> {
        return await prisma.groupes.findFirst({
            where: {
                grp_id: id
            },
            include: {
                student: {
                    include: {
                        person: true,
                    }
                },
                classes: true,
            }
        })
    }

    public async create(groupDto: GroupesDto): Promise<GroupesModel> {
        return await prisma.groupes.create({
            data: {
                grp_label: groupDto.label,
                grp_classes: +groupDto.classes.id,
            },
            include: {
                classes: true,
            }
        })
    }

    public async addToGroup(id: number, students: Array<StudentDto>): Promise<GroupesModel> {
        const ids = students.map((student) => {
            return {
                std_id: +student.id
            }
        });
        return await prisma.groupes.update({
            where: {
                grp_id: id
            },
            data: {
                cls_updatedat: this.getCurrentTime(),
                student: {
                    connect: [...ids],
                },
            },
            include: {
                student: {
                    include: {
                        person: true
                    }
                },
                classes: true,
            }
        })
    }

    public async deleteToGroup(id: number, students: Array<StudentDto>): Promise<GroupesModel> {
        const ids = students.map((student) => {
            return {
                std_id: +student.id
            }
        })
        return await prisma.groupes.update({
            where: {
                grp_id: id
            },
            data: {
                cls_updatedat: this.getCurrentTime(),
                student: {
                    disconnect: [...ids]
                }
            },
            include: {
                student: {
                    include: {
                        person: true,
                    }
                },
                classes: true
            }
        })
    }

    public async update(group: GroupesDto): Promise<GroupesModel> {
        return await prisma.groupes.update({
            where: {
                grp_id: +group.id,
            },
            data: {
                cls_updatedat: this.getCurrentTime(),
                grp_label: group.label,
                grp_classes: +group.classes.id,
            },
            include: {
                student: {
                    include: {
                        person: true,
                    }
                },
                classes: true,
            }
        })
    }

    public async delete(id: number): Promise<GroupesModel> {
        return await prisma.groupes.delete({
            where: {
                grp_id: id
            }
        })
    }
}