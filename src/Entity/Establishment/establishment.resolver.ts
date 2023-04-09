import {EstablishmentModel} from "./Model/establishment.model";
import {EstablishmentService} from "./establishment.service";
import {EstablishmentDto} from "./Dto/establishment.dto";


const establishmentService: EstablishmentService = new EstablishmentService();
export const EstablishmentResolver = {
  establishments: async (): Promise<Array<EstablishmentDto>> => {
    const establishmentModel: Array<EstablishmentModel> = await establishmentService.getEstablishments();
    return establishmentModel.map((establishment) => EstablishmentDto.Load(establishment));
  },
  establishment: async ({id}: { id: number }): Promise<EstablishmentDto> => {
    const establishmentModel: EstablishmentModel = await establishmentService.getOne(+id);
    return EstablishmentDto.Load(establishmentModel);
  },

  addEstablishment: async ({establishment}: { establishment: EstablishmentDto }): Promise<EstablishmentDto> => {
    console.log(establishment)
    const establishmentModel: EstablishmentModel = await establishmentService.createEstablishment(establishment);
    return EstablishmentDto.Load(establishmentModel);
  },

  connectParentSite: async ({id, parentSite}: { id: number, parentSite: number }) => {
    const establishmentModel: EstablishmentModel = await establishmentService.connectParentSite(+id, parentSite);
    return EstablishmentDto.Load(establishmentModel);
  },

  updateEstablishment: async ({establishment}: { establishment: EstablishmentDto }) => {
    const establishmentModel: EstablishmentModel = await establishmentService.updateEstablishment(establishment);
    return EstablishmentDto.Load(establishmentModel);
  },

  deleteEstablishment: async ({id}: { id: number }): Promise<boolean> => {
    const establishmentModel: EstablishmentModel = await establishmentService.deleteEstablishment(+id);
    return establishmentModel.est_id > 0;
  }
}