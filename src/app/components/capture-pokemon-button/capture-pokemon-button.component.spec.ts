import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapturePokemonButtonComponent } from './capture-pokemon-button.component';

describe('CapturePokemonButtonComponent', () => {
  let component: CapturePokemonButtonComponent;
  let fixture: ComponentFixture<CapturePokemonButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapturePokemonButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapturePokemonButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
