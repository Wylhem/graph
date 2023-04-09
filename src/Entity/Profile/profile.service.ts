import {Profile} from "./Model/profile.model";
import {prisma} from "../../Prisma/prisma";
import {ProfileDto} from "./Dto/profile.dto";
import {BaseService} from "../../Base/base.service";

export class ProfileService extends BaseService{
    constructor() {
        super();
    }
    public async getProfiles(): Promise<Array<Profile>> {
        return await prisma.profile.findMany();
    }
    public async  getProfile(id: number): Promise<Profile>{
        return await prisma.profile.findFirst({
            where: {
                prf_id: id
            }
        })
    }

    public async addProfile(profileDto: ProfileDto): Promise<Profile> {
        return await prisma.profile.create({
            data: {
                prf_label: profileDto.label,
            }
        })
    }

    public async update(profileDto: ProfileDto): Promise<Profile> {
        return await prisma.profile.update({
            where:{
                prf_id: +profileDto.id
            },
            data:{
                prf_label: profileDto.label,
                prf_updatedat: this.getCurrentTime()
            }
        })
    }

    public async delete(id: number): Promise<Profile> {
        return  await prisma.profile.delete({
            where: {
                prf_id: +id
            }
        })
    }
}