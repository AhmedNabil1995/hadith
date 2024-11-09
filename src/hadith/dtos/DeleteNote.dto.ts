import { IsMongoId } from 'class-validator';
import mongoose from 'mongoose';

export class FindNoteDto {
  static getQuery(query: FindNoteDto) {
    const mongooseQuery = { $and: [] };
    if (query.id) {
      mongooseQuery.$and.push({ _id: query.id });
    }

    return mongooseQuery;
  }

  @IsMongoId()
  id: mongoose.Types.ObjectId;
}
