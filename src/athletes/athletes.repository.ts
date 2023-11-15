import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Athlete, AthleteDocument } from "./athletes.types";
import { HydratedDocument, Model, Types } from 'mongoose';

@Injectable()
export class AthletesRepository {
    constructor(@InjectModel(Athlete.name) private readonly athleteModel: Model<AthleteDocument>){}

    async saveAthlete(athlete: AthleteDocument): Promise<boolean>{
        const result = await athlete.save();
        return !!result
    }

    async createAthlete(athleteDto: Athlete): Promise<string> {
        const newAthlete = new this.athleteModel(athleteDto);
        await newAthlete.save();
        return newAthlete._id.toString();
      }



}