import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class fasl {
  _id: number;
  name: string;
}
export const faslSchema = SchemaFactory.createForClass(fasl);

@Schema()
export class Ketab {
  @Prop({ type: Number, required: true })
  _id: number;

  @Prop({ type: Number, required: true })
  maqsad_id: number;

  @Prop({ type: String, required: true })
  title: string;

  @Prop({ type: [fasl] })
  fasls: fasl[];
}

export const KetabSchema = SchemaFactory.createForClass(Ketab);

@Schema()
export class Maqsad {
  @Prop({ type: Number, required: true })
  _id: number;

  @Prop({ type: String, required: true })
  icon: string;

  @Prop({ type: String, required: true })
  short_title: string;

  @Prop({ type: String, required: true })
  title: string;

  @Prop({ type: [KetabSchema] })
  ketab: Ketab[];
}

export const MaqsadSchema = SchemaFactory.createForClass(Maqsad);
