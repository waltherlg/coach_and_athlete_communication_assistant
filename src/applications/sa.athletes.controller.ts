import { Body, Controller, Get, HttpCode, Param, Post } from "@nestjs/common";
import { CommandBus } from "@nestjs/cqrs";
import { CreateAthleteInputModel } from "src/athletes/athletes.types";
import { SaCreateNewAtleteCommand } from "../athletes/use-cases/sa-create-new-athlete-use-case";
import { AthletesRepository } from "../athletes/athletes.repository";

@Controller('sa/athletes')

export class SaAthletesController{
  constructor(
    private commandBus: CommandBus,
    private readonly athletesRepository: AthletesRepository){}

    @Post()    
    async saCreateAthlete(
      @Body() athleteDto: CreateAthleteInputModel){
      const newAtleteId = await this.commandBus.execute(new SaCreateNewAtleteCommand(athleteDto))
      const createdAthlete = await this.athletesRepository.getAthleteForSaById(newAtleteId)
      return createdAthlete
    }

    @Get(':blogId')
    async getAthleteForSaById(
      @Param('blogId') blogId: string     
    ){
      const athlete = await this.athletesRepository.getAthleteForSaById(blogId)
      return athlete
    }

}