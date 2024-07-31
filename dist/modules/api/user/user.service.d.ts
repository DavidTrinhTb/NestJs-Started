import { UserRepositories } from "src/modules/database/repostories/user.repostories";
import { DeleteUserDTO, GetListUserDTO, UpdateUserDTO } from "./dto/user.dto";
import { BaseResponse } from "src/modules/common/response/base.response";
export declare class UserService {
    private userRepositories;
    constructor(userRepositories: UserRepositories);
    getUsers(query: GetListUserDTO): Promise<BaseResponse<import("src/modules/common/pagination/pagination").IGetPaginationResponse<any>>>;
    updateUser({ wallet_address, user_name }: UpdateUserDTO): Promise<boolean | BaseResponse<{}>>;
    getUserDetail(): Promise<any>;
    deleteUser({ wallet_address }: DeleteUserDTO): Promise<boolean | BaseResponse<{}>>;
}
