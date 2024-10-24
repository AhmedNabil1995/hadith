import { Controller, Get, Param } from '@nestjs/common';
import { ScrapingService } from './scraping.service';

@Controller('scraping')
export class ScrapingController {
  constructor(private readonly hadithScraperService: ScrapingService) {}
  @Get('/scrape/all/:startId')
  async scrapeAllHadith(@Param('startId') startId: number) {
    await this.hadithScraperService.scrapeHadith(startId);
    return { message: `Started scraping Hadith from ID: ${startId}` };
  }
}
