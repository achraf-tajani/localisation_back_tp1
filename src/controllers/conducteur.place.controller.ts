import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ConducteurPlaceDto } from 'src/classes';
import { ConducteurPlaceService } from 'src/services';

@Controller('conducteur_place')
export class ConducteurPlaceController {
  constructor(
    private readonly conducteurPlaceService: ConducteurPlaceService,
  ) {}

  @Get('places/:vehiculeId')
  async findAllPlacesByVehiculeId(@Param('vehiculeId') vehiculeId: string) {
    const places =
      await this.conducteurPlaceService.findAllByVehiculeId(vehiculeId);
    return places;
  }

  @Post('newPlace')
  async create(@Body() conducteurPlaceData: ConducteurPlaceDto) {
    await this.conducteurPlaceService.create(conducteurPlaceData);
    return { message: 'Enregistrement effectué avec succès' };
  }
}
