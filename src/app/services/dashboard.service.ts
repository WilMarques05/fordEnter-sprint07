import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Veiculo } from '../models/vehicles';
import { DadosVeiculoVin } from '../models/vehiclesVin';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  http = inject(HttpClient);

    //Pegar todos os veículos (/vehicles)
  getVeiculos(): Observable<{vehicles: Veiculo[]}>{
    return this.http.get<{vehicles: Veiculo[]}>("http://localhost:3001/vehicles");
  }

    //Pegar veículos pelos dados Vin (/vehicleData)
    getVinVeiculos(vin: string): Observable<DadosVeiculoVin>{
      return this.http.post<DadosVeiculoVin>("http://localhost:3001/vehicleData", {vin});

    }
}
