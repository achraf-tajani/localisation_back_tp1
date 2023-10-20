import { Injectable } from '@nestjs/common';
import { ConducteurVehiculeDto } from 'src/classes';
import { Supabase } from 'src/shared';

@Injectable()
export class ConducteurVehiculeService {
  constructor(private readonly supabaseService: Supabase) {}
  async findAll(): Promise<ConducteurVehiculeDto[]> {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('conducteur_vehicule')
      .select('*');

    if (error) {
      throw new Error(
        `Erreur lors de la récupération des conducteur_vehicule : ${error.message}`,
      );
    }

    return data;
  }
}
