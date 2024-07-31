import { IPaginateRequest } from "./pagination.interface";
export declare class PaginateDto implements IPaginateRequest {
    take?: number;
    page?: number;
}
