import { PaginationResponse } from "../pagination/pagination.interface";
export declare class BaseResponse<T> {
    data: T;
    msg: string;
    status_code: number;
    timestamp: string;
    pagination?: PaginationResponse;
    constructor(data: T, statusCode?: number, message?: string, pagination?: PaginationResponse);
}
