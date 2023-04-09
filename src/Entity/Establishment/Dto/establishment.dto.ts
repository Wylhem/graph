import {BaseDto} from "../../../Base/base.dto";
import {EstablishmentModel} from "../Model/establishment.model";
import {TrainingDto} from "../../Training/Dto/training.dto";
import {ClassroomDto} from "../../Classroom/Dto/classroom.dto";

export class EstablishmentDto extends BaseDto {
  publicName: string;

  name: string;

  address: string;

  parentSite?: EstablishmentDto;

  childSites?: Array<EstablishmentDto>;

  trainings?: Array<TrainingDto>;

  classrooms?: Array<ClassroomDto>;

  public static Load(establishmentModel: EstablishmentModel): EstablishmentDto {
    return {
      id: establishmentModel.est_id,
      publicName: establishmentModel.est_publicname,
      name: establishmentModel.est_name,
      address: establishmentModel.est_address,
      parentSite: establishmentModel?.establishment ? EstablishmentDto.Load(establishmentModel.establishment) : null,
      childSites: establishmentModel?.other_establishment ?
          establishmentModel.other_establishment.map((x) => EstablishmentDto.Load(x)) : null,
      classrooms: establishmentModel?.classroom ? establishmentModel.classroom.map((classroom) => ClassroomDto.Load(classroom)) : null,
      trainings: establishmentModel?.training ? establishmentModel.training.map((training) => TrainingDto.Load(training)) : null,
      updatedAt: establishmentModel.est_updatedat,
      createdAt: establishmentModel.est_createdat,
    }
  }

}