import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../../components/card/card.component';
import { DashboardService } from '../../services/dashboard.service';
import { DadosVeiculoVin } from '../../models/vehiclesVin';
import { Veiculo } from '../../models/vehicles';

@Component({
  selector: 'app-dashboard',
  imports: [CardComponent, CommonModule, FormsModule],
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

  dadosVin!: DadosVeiculoVin;
  vinAtual: string = "";

  private vinMap: { [key: number]: string } = {
    1: "2FRHDUYS2Y63NHD22454", // Ranger
    2: "2RFAASDY54E4HDU34874", // Mustang
    3: "2FRHDUYS2Y63NHD22455", // Territory
    4: "2RFAASDY54E4HDU34875", // Bronco Sport
  //Caso tenha um novo Vin na API:
  //5: ATUALIZAR VIN AQUI
  };

  ngOnInit(): void {
    this.dashboardService.getVeiculos().subscribe({
      next: (resposta) => {
        if (resposta && resposta.vehicles && resposta.vehicles.length > 0) {
          this.listaVeiculos = resposta.vehicles;
          this.atualizarDashboard(resposta.vehicles[0]);
        }
      }
    });
  }

onVeiculoChange(event: Event): void {
  const selectElement = event.target as HTMLSelectElement;
  const veiculoId = Number(selectElement.value);
  const veiculoLocalizado = this.listaVeiculos.find(v => v.id === veiculoId);

  if (veiculoLocalizado) {
    this.veiculoSelecionado = veiculoLocalizado;
    this.vinAtual = this.vinMap[veiculoId] || "";
    
    if (this.vinAtual) {
      this.buscarDados(this.vinAtual);
    }
  }
}

onVinDigitado(): void {
  const vinDigitado = this.vinAtual.trim().toUpperCase();
  const idEncontrado = Object.keys(this.vinMap).find(
    key => this.vinMap[Number(key)] === vinDigitado
  );

  if (idEncontrado) {
    const veiculoId = Number(idEncontrado);
    const veiculoCorrespondente = this.listaVeiculos.find(v => v.id === veiculoId);
    
    if (veiculoCorrespondente) {
      this.veiculoSelecionado = veiculoCorrespondente;
    }
  }

  if (vinDigitado.length >= 20) { 
    this.buscarDados(vinDigitado);
  }
}

  private atualizarDashboard(veiculo: Veiculo): void {
    this.veiculoSelecionado = veiculo;
    this.vinAtual = this.vinMap[veiculo.id] || "";
    if (this.vinAtual) {
      this.buscarDados(this.vinAtual);
    }
  }

  private buscarDados(vin: string): void {
    this.dashboardService.getVinVeiculos(vin).subscribe({
      next: (dados) => {
        this.dadosVin = dados;
      },
      error: (erro) => {
        console.warn(`A API não possui dados cadastrado para o VIN: ${vin}`);
      }
    });
  }
}