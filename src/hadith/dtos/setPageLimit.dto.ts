import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { QueryOptions } from 'mongoose';

export class SetPageLimit {
  static geOptions(options: SetPageLimit): QueryOptions<any> {
    const limit = options.limit || 15;
    const page = options.page || 0;
    return {
      limit,
      projection: options.select || undefined,
      skip: page * limit,
    };
  }

  @IsNumber()
  @Type(() => Number)
  page?: number;

  @IsNumber()
  @Type(() => Number)
  @IsOptional()
  limit?: number;

  @IsOptional()
  @IsString()
  select?: string;
}
