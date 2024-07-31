"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateTypeORM = exports.paginate = void 0;
exports.getOffset = getOffset;
const constants_1 = require("./constants");
function getOffset(take = constants_1.PAGINATION_TAKEN, page) {
    if (page && page > 0) {
        return take * page - take;
    }
    return 0;
}
const paginate = async (queryBuilder, page, take) => {
    page = page ? page : 1;
    take = take ? take : constants_1.PAGINATION_TAKEN;
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
exports.paginate = paginate;
const paginateTypeORM = async (repository, page, take, options = {}) => {
    page = page ? page : 1;
    take = take ? take : constants_1.PAGINATION_TAKEN;
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
exports.paginateTypeORM = paginateTypeORM;
//# sourceMappingURL=pagination.js.map