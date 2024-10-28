import { IsNumber, IsOptional } from 'class-validator';

export class FindHadithsDto {
  static getQuery(query: FindHadithsDto) {
    const mongooseQuery = { $and: [] };

    if (query.ketab_id) {
      mongooseQuery.$and.push({ ketab_id: query.ketab_id });
    }
    if (query.fasl_id) {
      mongooseQuery.$and.push({ fasl_id: query.fasl_id });
    }
    if (query.category_id) {
      mongooseQuery.$and.push({ category_id: query.category_id });
    }

    return mongooseQuery;
  }

  @IsNumber()
  ketab_id: number;
  @IsNumber()
  @IsOptional()
  category_id: number;
  @IsNumber()
  @IsOptional()
  fasl_id: number;
}
