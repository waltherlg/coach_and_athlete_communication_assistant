import { Injectable } from "@nestjs/common";
import { Athlete, AthleteDbType, CreateAthleteInputModel } from "../athletes/athletes.types";
import { Types } from 'mongoose';

@Injectable()
export class DtoFactory {
    async createAthleteDto(createAthleteDto: CreateAthleteInputModel){
        const newAthleteDto = new AthleteDbType(
            new Types.ObjectId(),
            createAthleteDto.login,
            createAthleteDto.surname,
            createAthleteDto.name,
            createAthleteDto.dateOfBirth,
            new Date().toISOString(),
        );
        return newAthleteDto;
    }
}