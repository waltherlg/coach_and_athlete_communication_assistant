import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SaAthletesController } from './applications/sa.athletes.controller';

@Module({
  imports: [],
  controllers: [AppController,
    SaAthletesController],
  providers: [AppService],
})
export class AppModule {}
