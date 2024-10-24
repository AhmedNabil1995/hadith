import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Hadith } from './entities/hadith.entity';
import { Model } from 'mongoose';
import { CreateHadithDto } from './dtos/CreateHadith.dto';

@Injectable()
export class HadithService {
  constructor(@InjectModel(Hadith.name) private hadithModel: Model<Hadith>) {}

  async create(createHadithDto: CreateHadithDto) {
    const hadith = new this.hadithModel(createHadithDto);
    await hadith.save();
  }
}
