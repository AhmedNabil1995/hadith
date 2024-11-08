import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FavHadith, FavHadithSchema } from './entities/fav.entity';
import { Hadith, HadithSchema } from './entities/hadith.entity';
import {
  LastVisitedHadith,
  LastVisitedHadithSchema,
} from './entities/lastVisitedHadith.entity';
import { Maqsad, MaqsadSchema } from './entities/maqsad.entity';
import { HadithController } from './hadith.controller';
import { HadithService } from './hadith.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Hadith.name, schema: HadithSchema }]),
    MongooseModule.forFeature([{ name: Maqsad.name, schema: MaqsadSchema }]),
    MongooseModule.forFeature([
      { name: FavHadith.name, schema: FavHadithSchema },
    ]),
    MongooseModule.forFeature([
      { name: LastVisitedHadith.name, schema: LastVisitedHadithSchema },
    ]),
  ],
  providers: [HadithService],
  controllers: [HadithController],
  exports: [HadithService],
})
export class HadithModule {}
