import { SelectQueryBuilder } from "typeorm";
import { PaginationResponse } from "./pagination.interface";
export interface IGetPaginationResponse<T> {
    data: T;
    pagination: PaginationResponse;
}
export declare function getOffset(take?: number, page?: number): number;
export declare const paginate: (queryBuilder: SelectQueryBuilder<any>, page: number, take: number) => Promise<IGetPaginationResponse<any>>;
export declare const paginateTypeORM: (repository: any, page: number, take: number, options?: any) => Promise<IGetPaginationResponse<any>>;
