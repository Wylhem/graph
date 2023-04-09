import {ProfileService} from "./profile.service";
import {ProfileDto} from "./Dto/profile.dto";
import {Profile} from "./Model/profile.model";

const profileService = new ProfileService();
export const ProfileResolver = {
    /*
    Query
     */
    profiles: async (): Promise<Array<ProfileDto>> => {
        const profiles: Array<Profile> =  await profileService.getProfiles();
        return profiles.map((profile)=> ProfileDto.Load(profile));
    },
    profile: async ({id}: {id: number}): Promise<ProfileDto> => {
        const profile: Profile = await profileService.getProfile(+id);
        console.log(profile.prf_createdat);
        return ProfileDto.Load(profile);
    },
    /*
    Mutation
     */
    addProfile: async ({profile}: {profile: ProfileDto}): Promise<ProfileDto> => {
        const profileModel: Profile = await profileService.addProfile(profile);
        return ProfileDto.Load(profileModel);
    },
    updateProfile: async ({profile}: {profile: ProfileDto}): Promise<ProfileDto> => {
        const profileModel : Profile = await profileService.update(profile);
        return ProfileDto.Load(profileModel);
    },
    deleteProfile: async ({id}: {id: number}): Promise<ProfileDto> => {
        const profile: Profile = await  profileService.delete(+id);
        return ProfileDto.Load(profile);
    }
}