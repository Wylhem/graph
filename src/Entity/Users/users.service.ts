import {BaseService} from "../../Base/base.service";
import {prisma} from "../../Prisma/prisma";
import {UsersDto} from "./Dto/users.dto";
import {UsersModel} from "./Model/users.model";

export class UsersService extends BaseService{
    constructor() {
        super();
    }
    public  async getUsers(): Promise<Array<UsersModel>> {
        return await prisma.users.findMany({
            include: {
                person: true,
                profile: true,
            }
        });
    }
    public async getUser(id: number): Promise<UsersModel>{
        return await prisma.users.findFirst({
            where: {
                usr_id: id
            },
            include:{
                person: true,
                profile: true
            }
        })
    }

    public async createUser(userDto: UsersDto): Promise<UsersModel> {
        return await prisma.users.create({
            data: {
                usr_email: userDto.email,
                usr_profile: +userDto.profile.id,
                usr_person: +userDto.person.id
            },
            include: {
                person: true,
                profile: true
            }
        })
    }
    public async updateUser(userDto: UsersDto): Promise<UsersModel> {
        return  await  prisma.users.update({
            where: {
              usr_id:+ userDto.id,
            },
            data: {
                usr_email: userDto.email,
                usr_profile: +userDto.profile.id,
                usr_person: +userDto.person.id,
                usr_updatedat: this.getCurrentTime()
            },
            include: {
                person: true,
                profile: true
            }
        })
    }
    public async deleteUser(id: number): Promise<UsersModel> {
        return await prisma.users.delete({
            where:{
                usr_id: id
            }
        })
    }
}