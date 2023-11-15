import { Body, Controller, HttpCode, Post } from "@nestjs/common";
import { CreateAthleteInputModel } from "src/athletes/athletes.types";

@Controller('sa/athletes')

export class SaAthletesController{

    @Post()    
    async saCreateAthlete(
      @Body() athleteDto: CreateAthleteInputModel  
    ){
        const newAtlete = { nameAndSurname: `${athleteDto.name ,athleteDto.surname, athleteDto.dateOfBirth}` }
        return newAtlete
    }

}