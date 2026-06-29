import { Component, OnInit, inject } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { DashboardService } from '../../services/dashboard.service';
import { Veiculo } from '../../models/vehicles';

@Component({
  selector: 'app-dashboard',
  imports: [CardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  dashboardService = inject(DashboardService);

  listaVeiculos: Veiculo[] = [];
  veiculoSelecionado: Veiculo = {
    id: -1,
    vehicle: "",
    volumetotal: 0,
    connected: 0,
    softwareUpdates: 0,
    img: "",
  };

  ngOnInit(): void {
    this.dashboardService.getVeiculos().subscribe({
      next: (veiculos) => {
        if (veiculos && veiculos.vehicles && veiculos.vehicles.length > 0) {
          this.listaVeiculos = veiculos.vehicles;
          this.veiculoSelecionado = veiculos.vehicles[0];
        }
      },
    });
  }

  escolhaVeiculo(event: Event){
    const id = Number ((event.target as HTMLSelectElement).value);
    const veiculo = this.listaVeiculos.find((veiculo) => veiculo.id === id);
    if(veiculo){
      this.veiculoSelecionado = veiculo;
    }
  }
}
