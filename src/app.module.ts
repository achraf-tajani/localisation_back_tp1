import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {
  ConducteurPlaceController,
  ConducteurVehiculeController,
} from './controllers';
import { SupabaseModule } from './shared';
import { ConfigModule } from '@nestjs/config';
import { ConducteurPlaceService, ConducteurVehiculeService } from './services';

@Module({
  imports: [SupabaseModule, ConfigModule.forRoot()],
  controllers: [
    AppController,
    ConducteurPlaceController,
    ConducteurVehiculeController,
  ],
  providers: [AppService, ConducteurPlaceService, ConducteurVehiculeService],
})
export class AppModule {}
