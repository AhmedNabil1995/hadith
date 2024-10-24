import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { MongooseEntity } from 'src/common/constant/MongooseEntity';

@Schema()
export class Footnote {
  @Prop({ type: String })
  footnotes: string;
  @Prop({ type: Number })
  hadith_no: number;
}

@Schema({ timestamps: true })
export class Hadith extends MongooseEntity {
  @Prop({ type: Number, required: true })
  hadith_no: number;

  @Prop({ type: String, required: true })
  hadith_text: string;

  @Prop({ type: Number })
  maqsad_id: number;

  @Prop({ type: String })
  maqsad_name: string;

  @Prop({ type: String })
  ketab_name: string;

  @Prop({ type: String })
  ketab_title: string;

  @Prop({ type: Number })
  category_id: number;

  @Prop({ type: String })
  category_name: string;

  @Prop({ type: String })
  hukm: string;

  @Prop({ type: String })
  reference: string;

  @Prop([{ type: Footnote }])
  footnotes: Footnote[];
}

export const HadithSchema = SchemaFactory.createForClass(Hadith);
