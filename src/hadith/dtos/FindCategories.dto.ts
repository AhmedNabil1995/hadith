import { IsNumber } from 'class-validator';

export class FindCategoriesDto {
  static getQuery(query: FindCategoriesDto) {
    const mongooseQuery = {};
    if (query.ketab_id) {
      mongooseQuery['ketab_id'] = query.ketab_id;
    }

    return mongooseQuery;
  }

  @IsNumber()
  ketab_id: number;
}
