import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AthleteDbType, CreateAthleteInputModel } from '../athletes.types';
import { AthletesRepository } from '../athletes.repository';
import { Types } from 'mongoose';



export class SaCreateNewAtleteCommand {
    constructor(public createAthleteDto: CreateAthleteInputModel ){}
}

@CommandHandler(SaCreateNewAtleteCommand)
export class SaCreateNewAtleteUseCase implements ICommandHandler<SaCreateNewAtleteCommand>{
    constructor(private readonly athletesRepository: AthletesRepository){}
    async execute(command: SaCreateNewAtleteCommand): Promise<string>{
        const newAtlete = new AthleteDbType(
            new Types.ObjectId(),
            command.createAthleteDto.surname,
            command.createAthleteDto.name,
            command.createAthleteDto.dateOfBirth,
            new Date().toISOString()
        )
        const newAtleteId = await this.athletesRepository.createAthlete(newAtlete)
        return newAtleteId
    }

}