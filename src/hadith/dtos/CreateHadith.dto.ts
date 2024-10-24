import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

export class FootnoteDto {
  @IsString()
  footnotes: string;

  @IsNumber()
  hadith_no: number;
}

export class CreateHadithDto {
  @IsNumber()
  @IsNotEmpty()
  hadith_no: number;

  @IsString()
  @IsNotEmpty()
  hadith_text: string;

  @IsOptional()
  @IsNumber()
  maqsad_id?: number;

  @IsOptional()
  @IsString()
  maqsad_name?: string;

  @IsOptional()
  @IsString()
  ketab_name?: string;

  @IsOptional()
  @IsString()
  ketab_title?: string;

  @IsOptional()
  @IsNumber()
  category_id?: number;

  @IsOptional()
  @IsString()
  category_name?: string;

  @IsOptional()
  @IsString()
  hukm?: string;

  @IsOptional()
  @IsString()
  reference?: string;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => FootnoteDto)
  footnotes?: FootnoteDto[];
}
