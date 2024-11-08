import { IsNumber, IsString } from 'class-validator';

export class AddNoteDto {
  @IsString()
  title: string;

  @IsString()
  content: string;

  @IsNumber()
  hadith_no: number;
}
