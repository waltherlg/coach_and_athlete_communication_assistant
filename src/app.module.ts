import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SaAthletesController } from './applications/sa.athletes.controller';
import { TrimNotEmptyValidator } from './middlewares/validators';

@Module({
  imports: [],
  controllers: [AppController,
    SaAthletesController],
  providers: [AppService,
    TrimNotEmptyValidator,
  ],
})
export class AppModule {}
