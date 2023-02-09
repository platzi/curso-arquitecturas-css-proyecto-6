import { TestBed } from '@angular/core/testing';

import { SharePokemonInfoService } from './share-pokemon-info.service';

describe('SharePokemonInfoService', () => {
  let service: SharePokemonInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharePokemonInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
