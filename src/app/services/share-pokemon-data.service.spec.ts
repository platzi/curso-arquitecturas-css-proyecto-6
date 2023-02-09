import { TestBed } from '@angular/core/testing';

import { SharePokemonDataService } from './share-pokemon-data.service';

describe('SharePokemonDataService', () => {
  let service: SharePokemonDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharePokemonDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
