import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Hadith, HadithSchema } from './entities/hadith.entity';
import { Maqsad, MaqsadSchema } from './entities/maqsad.entity';
import { HadithController } from './hadith.controller';
import { HadithService } from './hadith.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Hadith.name, schema: HadithSchema }]),
    MongooseModule.forFeature([{ name: Maqsad.name, schema: MaqsadSchema }]),
  ],
  providers: [HadithService],
  controllers: [HadithController],
  exports: [HadithService],
})
export class HadithModule {}
