import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SaAthletesController } from './applications/sa.athletes.controller';
import { TrimNotEmptyValidator } from './middlewares/validators';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as dotenv from 'dotenv';
import { Athlete, AthleteSchema } from './athletes/athletes.types';
import { CqrsModule } from '@nestjs/cqrs';
import { AthletesRepository } from './athletes/athletes.repository';
import { SaCreateNewAtleteUseCase } from './athletes/use-cases/sa-create-new-athlete-use-case';
import { DtoFactory } from './helpers/dto.factory';
dotenv.config();
const mongoUri = process.env.MONGO_URL;

const useCases = [
  SaCreateNewAtleteUseCase
]

@Module({
  imports: [
    CqrsModule,
    MongooseModule.forRoot(mongoUri, { dbName: 'coaches_and_athletes' }),
    MongooseModule.forFeature([
      {
        name: Athlete.name,
        schema: AthleteSchema,
      }
    ]),
    ConfigModule.forRoot(),
  ],
  controllers: [AppController,
    SaAthletesController],
  providers: [AppService,
    TrimNotEmptyValidator,
    AthletesRepository,
    DtoFactory,
    ...useCases
  ],
})
export class AppModule {}
