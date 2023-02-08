import { TestBed } from '@angular/core/testing';

import { GetPokemonByIdService } from './get-pokemon-by-id.service';

describe('GetPokemonByIdService', () => {
  let service: GetPokemonByIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPokemonByIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
