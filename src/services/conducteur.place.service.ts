import { Injectable } from '@nestjs/common';
import { ConducteurPlaceDto } from 'src/classes';
import { Supabase } from 'src/shared';

@Injectable({})
export class ConducteurPlaceService {
  constructor(private readonly supabaseService: Supabase) {}

  async findAllByVehiculeId(vehiculeId: string): Promise<ConducteurPlaceDto[]> {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('conducteur_place')
      .select('*')
      .eq('vehicle_id', vehiculeId);

    if (error) {
      throw new Error(
        `Erreur lors de la récupération des places : ${error.message}`,
      );
    }

    return data;
  }
  async create(
    conducteurPlaceData: ConducteurPlaceDto,
  ): Promise<ConducteurPlaceDto> {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('conducteur_place')
      .upsert([conducteurPlaceData]);

    if (error) {
      throw new Error(
        `Erreur lors de la création de la place : ${error.message}`,
      );
    }
    return data;
  }
}
