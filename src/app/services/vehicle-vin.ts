import { Injectable } from '@angular/core';
import { VehicleData } from '../models/veiculo.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class VehicleVin {
  
  constructor(private http: HttpClient){}

  buscarVeiculo(vin: String) {
    return this.http.post<VehicleData>(
      'http://localhost:3001/vehicleData',
      { vin }
    );
  }
}
