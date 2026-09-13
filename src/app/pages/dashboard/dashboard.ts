import { Component } from '@angular/core';
import { Menu } from "../../components/menu/menu";
import { VehicleData, Veiculo } from '../../models/veiculo.model';
import { Vehicle } from '../../services/vehicle';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VehicleVin } from '../../services/vehicle-vin';

@Component({
  selector: 'app-dashboard',
  imports: [Menu, CommonModule, FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  veiculos: Veiculo[] = [];
  veiculoSelecionado: Veiculo | null = null;

  vin: string = '';
  vehicleData: VehicleData | null = null;

  constructor(
    private vehicle: Vehicle,
    private vehicleVin: VehicleVin
  ) {}

  ngOnInit(): void {
    this.vehicle.getVeiculos().subscribe(
      response => {
        this.veiculos = response.vehicles;
      }
    );
  }

  veiculoEscolhido(event: Event): void {
    const idSelecionado = (event.target as HTMLSelectElement).value;

    if (idSelecionado) {
      this.veiculoSelecionado =
        this.veiculos.find(v => v.id == Number(idSelecionado)) || null;
    } else {
      this.veiculoSelecionado = null;
    }
  }

  buscarVeiculo(): void {
    this.vehicleVin.buscarVeiculo(this.vin).subscribe({
      next: (dados) => {
        console.log(dados);
        this.vehicleData = dados;
      },

      error: (erro) => {
        console.error('Erro ao buscar veículo:', erro);
        this.vehicleData = null;
      }
    });
  }
}
