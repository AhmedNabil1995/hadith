import { Module } from '@nestjs/common';
import { HadithService } from './hadith.service';
import { HadithController } from './hadith.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Hadith, HadithSchema } from './entities/hadith.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Hadith.name, schema: HadithSchema }]),
  ],
  providers: [HadithService],
  controllers: [HadithController],
  exports: [HadithService],
})
export class HadithModule {}
