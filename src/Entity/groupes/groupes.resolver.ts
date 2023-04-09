import {GroupesModel} from "./Model/groupes.model";
import {GroupesService} from "./groupes.service";
import {GroupesDto} from "./Dto/groupes.dto";
import {StudentDto} from "../Student/Dto/student.dto";

const groupesService: GroupesService = new GroupesService();
export const GroupesResolver = {
    groups: async (): Promise<Array<GroupesDto>> => {
        const groupesModel: Array<GroupesModel> = await groupesService.getGroups();
        return groupesModel.map((groupModel) => GroupesDto.Load(groupModel));
    },
    group: async ({id}: { id: number }): Promise<GroupesDto> => {
        const groupModel: GroupesModel = await groupesService.getOne(+id);
        return GroupesDto.Load(groupModel);
    },
    addGroup: async ({group}: { group: GroupesDto }): Promise<GroupesDto> => {
        const groupModel: GroupesModel = await groupesService.create(group);
        return GroupesDto.Load(groupModel);
    },
    addStudentsGroup: async ({id, students}: { id: number, students: Array<StudentDto> }): Promise<GroupesDto> => {
        const groupModel: GroupesModel = await groupesService.addToGroup(+id, students)
        return GroupesDto.Load(groupModel);
    },
    deleteStudentsGroup: async ({id, students}: { id: number, students: Array<StudentDto> }): Promise<GroupesDto> => {
        const groupModel: GroupesModel = await groupesService.deleteToGroup(+id, students);
        return GroupesDto.Load(groupModel);
    },
    updateGroup: async ({group}: { group: GroupesDto }): Promise<GroupesDto> => {
        const groupModel: GroupesModel = await groupesService.update(group);
        return GroupesDto.Load(groupModel);
    },
    deleteGroup: async ({id}: { id: number }): Promise<boolean> => {
        const groupModel: GroupesModel = await groupesService.delete(+id);
        return groupModel.grp_id > 0;
    }


}