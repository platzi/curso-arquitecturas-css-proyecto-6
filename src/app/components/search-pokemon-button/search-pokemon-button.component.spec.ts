import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPokemonButtonComponent } from './search-pokemon-button.component';

describe('SearchPokemonButtonComponent', () => {
  let component: SearchPokemonButtonComponent;
  let fixture: ComponentFixture<SearchPokemonButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPokemonButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchPokemonButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
