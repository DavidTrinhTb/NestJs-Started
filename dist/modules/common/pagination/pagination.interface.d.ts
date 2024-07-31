export interface IPaginateRequest {
    take?: number;
    page?: number;
}
export declare class PaginationResponse {
    total?: number;
    current_page?: number;
    total_pages?: number;
    take?: number;
}
