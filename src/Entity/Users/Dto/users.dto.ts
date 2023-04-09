import {BaseDto} from "../../../Base/base.dto";
import {PersonDto} from "../../Person/Dto/person.dto";
import {ProfileDto} from "../../Profile/Dto/profile.dto";
import {UsersModel} from "../Model/users.model";

export class UsersDto extends BaseDto {
  email: string;
  person?: PersonDto;
  profile?: ProfileDto;

  public static Load(userModel: UsersModel): UsersDto {
    return {
      id: userModel.usr_id,
      email: userModel.usr_email,
      person: userModel.person ? PersonDto.Load(userModel.person) : null,
      profile: userModel.profile ? ProfileDto.Load(userModel.profile) : null,
      updatedAt: userModel.usr_updatedat,
      createdAt: userModel.usr_createdat,
    }
  }

}