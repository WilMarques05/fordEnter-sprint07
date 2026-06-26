import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  http = inject(HttpClient);
    //Pegar todos os veículos (/vehicles)
  getVeiculos(){
    return this.http.get(
      ""
    );
  }
    //Pegar veículos pelos dados Vin (/vehicleData)
}
