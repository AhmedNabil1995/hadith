import { Type } from 'class-transformer';
import {
  IsArray,
  IsMongoId,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import mongoose from 'mongoose';
import { ToNumber } from 'src/common/constant/decorator/ToNumber';
import { SetPageLimit } from './setPageLimit.dto';

export class FindHadithsDto extends SetPageLimit {
  static getQuery(query: FindHadithsDto) {
    const mongooseQuery = { $and: [] };

    if (query.id) {
      mongooseQuery.$and.push({ _id: query.id });
    }

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

    if (query.ids) {
      mongooseQuery.$and.push({ _id: { $in: query.ids } });
    }

    if (query.searchKeyword) {
      mongooseQuery.$and.push({
        hadith_text_hadith_text_without_tashkeel: {
          $regex: decodeURIComponent(query.searchKeyword),
        },
      });
    }

    return mongooseQuery;
  }

  @IsMongoId()
  @IsOptional()
  id?: mongoose.Types.ObjectId;

  @IsNumber()
  @IsOptional()
  @ToNumber()
  ketab_id?: number;
  @IsNumber()
  @IsOptional()
  @ToNumber()
  category_id?: number;
  @IsNumber()
  @IsOptional()
  @ToNumber()
  fasl_id?: number;

  @IsOptional()
  @IsNumber()
  @ToNumber()
  hadith_no?: number;

  @IsOptional()
  @IsArray()
  @Type(() => mongoose.Types.ObjectId)
  ids?: mongoose.Types.ObjectId[];

  @IsString()
  @IsOptional()
  searchKeyword?: string;
}
