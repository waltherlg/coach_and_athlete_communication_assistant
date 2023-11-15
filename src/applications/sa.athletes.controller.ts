import { Body, Controller, HttpCode, Post } from "@nestjs/common";
import { CreateAthleteInputModel } from "src/athletes/athletes.types";

@Controller('sa/athletes')

export class SaAthletesController{

    @Post()    
    async saCreateAthlete(
      @Body() athleteDto: CreateAthleteInputModel  
    ){
      console.log(athleteDto);
      
        const newAtlete = { name: athleteDto.name, surname: athleteDto.surname, dateOfBirth: athleteDto.dateOfBirth} 
        return newAtlete
    }

}