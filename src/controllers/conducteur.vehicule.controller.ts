import { Controller, Get } from '@nestjs/common';
import { ConducteurVehiculeService } from 'src/services';

@Controller('conducteur_vehicule')
export class ConducteurVehiculeController {
  constructor(
    private readonly conducteurVehiculeService: ConducteurVehiculeService,
  ) {}

  @Get('all_vehicule')
  async findAll() {
    const conducteurVehicules = await this.conducteurVehiculeService.findAll();
    return conducteurVehicules;
  }
}
