import {BaseDto} from "../../../Base/base.dto";
import {Profile} from "../Model/profile.model";

export class ProfileDto extends BaseDto {
    label: string;

    public static Load(profile: Profile): ProfileDto {
        return {
            id: profile.prf_id,
            label: profile.prf_label,
            createdAt: profile.prf_createdat,
            updatedAt: profile.prf_updatedat,
        }
    }
}