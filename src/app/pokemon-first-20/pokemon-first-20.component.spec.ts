import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonFirst20Component } from './pokemon-first-20.component';

describe('PokemonFirst20Component', () => {
  let component: PokemonFirst20Component;
  let fixture: ComponentFixture<PokemonFirst20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonFirst20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonFirst20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
