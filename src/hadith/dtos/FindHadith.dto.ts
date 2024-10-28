import { IsNumber, IsOptional } from 'class-validator';
import { ToNumber } from 'src/common/constant/decorator/ToNumber';

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

    if (query.hadith_no) {
      mongooseQuery.$and.push({ hadith_no: query.hadith_no });
    }

    return mongooseQuery;
  }

  @IsNumber()
  @IsOptional()
  @ToNumber()
  ketab_id: number;
  @IsNumber()
  @IsOptional()
  @ToNumber()
  category_id: number;
  @IsNumber()
  @IsOptional()
  @ToNumber()
  fasl_id: number;

  @IsOptional()
  @IsNumber()
  @ToNumber()
  hadith_no: number;
}
