import {UsersDto} from "./Dto/users.dto";
import {UsersModel} from "./Model/users.model";
import {UsersService} from "./users.service";

const userService: UsersService = new UsersService();
export const UsersResolver = {
    users: async (): Promise<Array<UsersDto>> => {
        const userModels: Array<UsersModel> = await userService.getUsers();
        return userModels.map((user) => UsersDto.Load(user));
    },
    user: async ({id}: { id: number }): Promise<UsersDto> => {
        const userModel: UsersModel = await userService.getUser(+id);
        return UsersDto.Load(userModel);
    },
    addUsers: async ({user}: { user: UsersDto }): Promise<UsersDto> => {
        const userModel: UsersModel = await userService.createUser(user);
        return UsersDto.Load(userModel);
    },

    updateUsers: async ({user}: { user: UsersDto }): Promise<UsersDto> => {
        const userModel: UsersModel = await userService.updateUser(user);
        return UsersDto.Load(userModel);
    },

    deleteUsers: async ({id}: { id: number }): Promise<boolean> => {
        const userModel: UsersModel = await userService.deleteUser(+id);
        return userModel.usr_id > 0;
    }

}