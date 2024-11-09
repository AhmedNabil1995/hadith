import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AddNoteDto } from './dtos/addNote.dto';
import { FindCategoriesDto } from './dtos/FindCategories.dto';
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

  @Get('categories')
  async findCategories(@Query() findCategoriesDto: FindCategoriesDto) {
    const categories =
      await this.hadithService.findCategories(findCategoriesDto);
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
    return this.hadithService.addHadithToFav(findHadithsDto);
  }

  @Get('fav')
  async getFav(@Query() SetPageLimit: SetPageLimit) {
    return this.hadithService.getFav(SetPageLimit);
  }

  @Get('notes')
  async getNotes(@Query() SetPageLimit: SetPageLimit) {
    return this.hadithService.getNotes(SetPageLimit);
  }

  @Post('add-note')
  async addNote(
    @Query() findHadithsDto: FindHadithsDto,
    @Body() addNoteDto: AddNoteDto,
  ) {
    await this.hadithService.addNote(findHadithsDto, addNoteDto);
  }
}
