import {PersonDto} from "./Dto/person.dto";
import {PersonModel} from "./Model/person.model";
import {PersonService} from "./person.service";
import {PersonSchema} from "./Schema/person.schema";


const personService: PersonService = new PersonService();
export const PersonResolver = {
    persons: async (): Promise<Array<PersonDto>> => {
        const personModels: Array<PersonModel> = await personService.getPersons();
        return personModels.map((person)=> PersonDto.Load(person));
    },
    person: async ({id}): Promise<PersonDto> => {
        const personModel: PersonModel = await personService.getPerson(+id);
        return PersonDto.Load(personModel);
    },

    addPerson: async ({person}: {person: PersonDto}): Promise<PersonDto> => {
        const personModel: PersonModel = await personService.addPerson(person);
        return PersonDto.Load(personModel);
    },

    updatePerson: async ({person}: {person: PersonDto}): Promise<PersonDto> => {
        const personModel: PersonModel = await personService.updatePerson(person);
        return PersonDto.Load(personModel);
    },
    deletePerson: async ({id}: {id:number}): Promise<boolean>  => {
        const personModel: PersonModel = await personService.deletePerson(+id);
        return personModel.per_id > 0;
    }
}
