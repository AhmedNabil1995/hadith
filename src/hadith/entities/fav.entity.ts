import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { MongooseEntity } from 'src/common/constant/MongooseEntity';
import { Hadith } from './hadith.entity';

@Schema()
export class FavHadith extends MongooseEntity {
  @Prop({ type: mongoose.Types.ObjectId, ref: Hadith.name, required: true })
  hadith_id: mongoose.Types.ObjectId;
}

export const FavHadithSchema = SchemaFactory.createForClass(FavHadith);
