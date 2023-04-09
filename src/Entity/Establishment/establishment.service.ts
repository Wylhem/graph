import {BaseService} from "../../Base/base.service";
import {EstablishmentModel} from "./Model/establishment.model";
import {prisma} from "../../Prisma/prisma";
import {EstablishmentDto} from "./Dto/establishment.dto";

export class EstablishmentService extends BaseService {
  constructor() {
    super();
  }

  public async getEstablishments(): Promise<Array<EstablishmentModel>> {
    return await prisma.establishment.findMany({
      include: {
        establishment: true,
        other_establishment: true,
        training: true,
        classroom: true
      }
    })
  }

  public async getOne(id: number): Promise<EstablishmentModel> {
    return await prisma.establishment.findFirst({
      where: {
        est_id: id,
      },
      include: {
        establishment: true,
        other_establishment: true,
        training: true,
        classroom: true
      }
    })
  }

  public async createEstablishment(establishmentDto: EstablishmentDto): Promise<EstablishmentModel> {
    return await prisma.establishment.create({
      data: {
        est_name: establishmentDto.name,
        est_publicname: establishmentDto.publicName,
        est_address: establishmentDto.address,
      }
    })
  }

  public async connectParentSite(id: number, parentSite: number): Promise<EstablishmentModel> {
    return await prisma.establishment.update({
      where: {
        est_id: id
      },
      data: {
        est_updatedat: this.getCurrentTime(),
        est_parentsite: parentSite,
      },
      include: {
        establishment: true,
        other_establishment: true,
        training: true,
      }
    })
  }

  public async updateEstablishment(establishmentDto: EstablishmentDto): Promise<EstablishmentModel> {
    return await prisma.establishment.update({
      where: {
        est_id: +establishmentDto.id,
      },
      data: {
        est_updatedat: this.getCurrentTime(),
        est_name: establishmentDto.name,
        est_publicname: establishmentDto.publicName,
      },
      include: {
        establishment: true,
        other_establishment: true,
        training: true
      }
    })
  }

  public async deleteEstablishment(id: number): Promise<EstablishmentModel> {
    return await prisma.establishment.delete({
      where: {
        est_id: id
      }
    })
  }

}