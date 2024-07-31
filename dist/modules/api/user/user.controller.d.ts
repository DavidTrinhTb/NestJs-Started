import { DeleteUserDTO, GetListUserDTO, UpdateUserDTO } from "./dto/user.dto";
export declare class UsersController {
    private readonly userService;
    getUsers(query: GetListUserDTO): Promise<import("../../common/response/base.response").BaseResponse<import("../../common/pagination/pagination").IGetPaginationResponse<any>>>;
    getDetailUser(): Promise<any>;
    deleteUser({ wallet_address }: DeleteUserDTO): Promise<boolean | import("../../common/response/base.response").BaseResponse<{}>>;
    updateUser(body: UpdateUserDTO): Promise<boolean | import("../../common/response/base.response").BaseResponse<{}>>;
}
