import { IsNumber, IsOptional } from 'class-validator';

export class FindCategoriesDto {
  static getQuery(query: FindCategoriesDto) {
    const mongooseQuery = {};
    if (query.ketab_id) {
      mongooseQuery['ketab_id'] = query.ketab_id;
    }

    if (query.fasl_id) {
      mongooseQuery['fasl_id'] = query.fasl_id;
    }

    return mongooseQuery;
  }

  @IsNumber()
  ketab_id: number;

  @IsOptional()
  @IsNumber()
  fasl_id?: number;
}
