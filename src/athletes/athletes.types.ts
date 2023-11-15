
import { StringTrimNotEmpty} from "src/middlewares/validators";
import { Length, Validate, MaxLength, IsDateString } from 'class-validator';
import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument, ObjectId, Types } from 'mongoose';


export class CreateAthleteInputModel {
    @StringTrimNotEmpty()
    @MaxLength(50)
    name: string;
    @StringTrimNotEmpty()
    @MaxLength(50)
    surname: string;
    @StringTrimNotEmpty()
    @MaxLength(50)
    dateOfBirth: string;
  }

  

  export type AthleteDocument = HydratedDocument<Athlete>;

  @Schema()
  export class Athlete {
    @Prop({ required: true, type: mongoose.Schema.Types.ObjectId })
    _id: Types.ObjectId;
    @Prop({required: true})
    name: string;
    @Prop({required: true})
    surname: string;
    @Prop({required: true})
    dateOfBirth: string;
    @Prop({required: true})
    createdAt: string;
  }

  export const AthleteSchema = SchemaFactory.createForClass(Athlete);

  export class AthleteDbType {
    constructor (
      public _id: Types.ObjectId,
      public surname: string,
      public name: string,
      public dateOfBirth: string,
      public createdAt: string,
    ){}
  }