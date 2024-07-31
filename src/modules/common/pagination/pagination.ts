import { SelectQueryBuilder } from "typeorm";
import { PaginationResponse } from "./pagination.interface";
import { PAGINATION_TAKEN } from "./constants";

export interface IGetPaginationResponse<T> {
  data: T;
  pagination: PaginationResponse;
}

export function getOffset(take: number = PAGINATION_TAKEN, page?: number) {
  if (page && page > 0) {
    return take * page - take;
  }
  return 0;
}

// NOTE: for paging
export const paginate = async (
  queryBuilder: SelectQueryBuilder<any>,
  page: number,
  take: number
): Promise<IGetPaginationResponse<any>> => {
  page = page ? page : 1;
  take = take ? take : PAGINATION_TAKEN;
  const total = await queryBuilder.getCount();
  const result = await queryBuilder
    .skip(getOffset(take, page))
    .take(Number(take))
    .getMany();
  return {
    pagination: {
      current_page: page,
      total_pages: Math.ceil(total / take),
      take: take,
      total: total,
    },
    data: result,
  };
};

export const paginateTypeORM = async (
  repository: any,
  page: number,
  take: number,
  options: any = {}
): Promise<IGetPaginationResponse<any>> => {
  page = page ? page : 1;
  take = take ? take : PAGINATION_TAKEN;
  const [total, result] = await Promise.all([
    repository.count({
      where: !!options?.where ? options.where : {},
      order: !!options?.order
        ? options.order
        : {
            created_at: "DESC",
          },
    }),
    repository.find({
      ...options,
      skip: getOffset(take, page),
      take: Number(take),
    }),
  ]);
  return {
    pagination: {
      current_page: page,
      total_pages: Math.ceil(total / take),
      take: take,
      total: total,
    },
    data: result,
  };
};
