import { Controller, Get, Param, Query } from '@nestjs/common';
import { FindHadithsDto } from './dtos/FindHadith.dto';
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

  @Get()
  async lasVisitedHadith() {
    return this.hadithService.getLastVisitedHadith();
  }
}
