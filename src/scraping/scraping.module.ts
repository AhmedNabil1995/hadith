import { Module } from '@nestjs/common';
import { ScrapingService } from './scraping.service';
import { HadithModule } from 'src/hadith/hadith.module';
import { ScrapingController } from './scraping.controller';

@Module({
  imports: [HadithModule],
  providers: [ScrapingService],
  controllers: [ScrapingController],
})
export class ScrapingModule {}
