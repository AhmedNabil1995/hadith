import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { MongooseEntity } from 'src/common/constant/MongooseEntity';

@Schema()
export class FavHadith extends MongooseEntity {
  @Prop({ type: Number, required: true })
  hadith_no: number;
}

export const FavHadithSchema = SchemaFactory.createForClass(FavHadith);
