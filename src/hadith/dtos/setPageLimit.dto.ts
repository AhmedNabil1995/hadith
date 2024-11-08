import { Type } from 'class-transformer';
import { IsNumber, IsOptional } from 'class-validator';

export class SetPageLimit {
  @IsNumber()
  @Type(() => Number)
  page: number;

  @IsNumber()
  @Type(() => Number)
  @IsOptional()
  limit: number;
}
