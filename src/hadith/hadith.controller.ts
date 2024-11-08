import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AddNoteDto } from './dtos/addNote.dto';
import { FindHadithsDto } from './dtos/FindHadith.dto';
import { SetPageLimit } from './dtos/setPageLimit.dto';
import { HadithService } from './hadith.service';

@Controller('hadiths')
export class HadithController {
  constructor(private readonly hadithService: HadithService) {}
  @Get('maqsads')
  async findMaqsads() {
    const maqsads = await this.hadithService.findMaqsads();
    return { maqsads };
  }

  @Get('categories/:ketabId')
  async findCategories(@Param('ketabId') ketabId: string) {
    const categories = await this.hadithService.findCategories({
      ketab_id: Number(ketabId),
    });
    return { categories };
  }

  @Get()
  async findHadiths(@Query() findHadithsDto: FindHadithsDto) {
    const hadiths = await this.hadithService.findHadiths(findHadithsDto);
    return { hadiths };
  }

  @Get('lat-visited')
  async lasVisitedHadith() {
    return this.hadithService.getLastVisitedHadith();
  }

  @Post('add-to-fav')
  async addToFav(@Query() findHadithsDto: FindHadithsDto) {
    await this.hadithService.addHadithToFav({
      hadith_no: Number(findHadithsDto),
    });
  }

  @Get('fav')
  async getFav(@Query() SetPageLimit: SetPageLimit) {
    return this.hadithService.getFav(SetPageLimit);
  }

  @Get('notes')
  async getNotes(@Query() SetPageLimit: SetPageLimit) {
    return this.hadithService.getFav(SetPageLimit);
  }

  @Post('add-note')
  async addNote(
    @Query() findHadithsDto: FindHadithsDto,
    @Body() addNoteDto: AddNoteDto,
  ) {
    await this.hadithService.addNote(findHadithsDto, addNoteDto);
  }
}
