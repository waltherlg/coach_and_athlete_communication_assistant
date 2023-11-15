import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SaAthletesController } from './applications/sa.athletes.controller';
import { TrimNotEmptyValidator } from './middlewares/validators';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as dotenv from 'dotenv';
dotenv.config();
const mongoUri = process.env.MONGO_URL;

@Module({
  imports: [
    MongooseModule.forRoot(mongoUri, { dbName: 'coaches_and_athletes' }),
    MongooseModule.forFeature([]),
    ConfigModule.forRoot(),
  ],
  controllers: [AppController,
    SaAthletesController],
  providers: [AppService,
    TrimNotEmptyValidator,
  ],
})
export class AppModule {}
