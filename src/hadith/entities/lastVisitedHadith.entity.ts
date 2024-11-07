import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { MongooseEntity } from 'src/common/constant/MongooseEntity';

@Schema({ timestamps: true })
export class LastVisitedHadith extends MongooseEntity {
  @Prop({ type: Number })
  hadith_no: number;
}

export const LastVisitedHadithSchema =
  SchemaFactory.createForClass(LastVisitedHadith);
