import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { MongooseEntity } from 'src/common/constant/MongooseEntity';

@Schema()
export class Note extends MongooseEntity {
  @Prop({ type: Number, required: true })
  hadith_no: number;

  @Prop({ type: String, required: true })
  title: string;

  @Prop({ type: String, required: true })
  content: string;
}

export const NoteSchema = SchemaFactory.createForClass(Note);
