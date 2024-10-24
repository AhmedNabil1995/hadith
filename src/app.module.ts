import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HadithModule } from './hadith/hadith.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ScrapingModule } from './scraping/scraping.module';

@Module({
  imports: [
    HadithModule,
    MongooseModule.forRoot(
      'mongodb+srv://ahmednabil55586:ZOxRP4utIVfKXEWC@cluster0.hmfkq.mongodb.net/hadith?retryWrites=true&w=majority&appName=Cluster0',
    ),
    ScrapingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
