import { Type } from 'class-transformer';
import { IsNumber, IsOptional } from 'class-validator';
import { ToNumber } from 'src/common/constant/decorator/ToNumber';

export class FindCategoriesDto {
  static getQuery(query: FindCategoriesDto) {
    const mongooseQuery = { $and: [] };
    if (query.ketab_id) {
      mongooseQuery.$and.push({ ketab_id: Number(query.ketab_id) });
    }

    if (query.fasl_id) {
      mongooseQuery.$and.push({ fasl_id: Number(query.fasl_id) });
    }

    return mongooseQuery;
  }

  @IsNumber()
  @Type(() => Number)
  @ToNumber()
  ketab_id: number;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  @ToNumber()
  fasl_id?: number;
}
