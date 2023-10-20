import { Controller } from '@nestjs/common';
import { ConducteurPlaceService } from 'src/services';

@Controller('conducteur-place')
export class ConducteurPlaceController {
  constructor(
    private readonly conducteurPlaceService: ConducteurPlaceService,
  ) {}
}
