import { TestBed } from '@angular/core/testing';

import { VehicleVin } from './vehicle-vin';

describe('VehicleVin', () => {
  let service: VehicleVin;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehicleVin);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
