import {BaseDto} from "../../../Base/base.dto";
import {PersonDto} from "../../Person/Dto/person.dto";
import {ProfessorModel} from "../Model/professor.model";

export class ProfessorDto extends BaseDto {
  person?: PersonDto;

  public static Load(professorModel: ProfessorModel): ProfessorDto {
    return {
      id: professorModel.pro_id,
      person: professorModel.person ? PersonDto.Load(professorModel.person) : null,
      createdAt: professorModel.pro_createdat,
      updatedAt: professorModel.pro_updatedat,
    }
  }
}