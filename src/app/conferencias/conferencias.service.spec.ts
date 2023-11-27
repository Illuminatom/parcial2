/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ConferenciasService } from './conferencias.service';

describe('Service: Conferencias', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConferenciasService]
    });
  });

  it('should ...', inject([ConferenciasService], (service: ConferenciasService) => {
    expect(service).toBeTruthy();
  }));
});
