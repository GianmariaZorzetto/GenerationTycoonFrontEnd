import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchermataBrainjRisultatoComponent } from './schermata-brainj-risultato.component';

describe('SchermataBrainjRisultatoComponent', () => {
  let component: SchermataBrainjRisultatoComponent;
  let fixture: ComponentFixture<SchermataBrainjRisultatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchermataBrainjRisultatoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchermataBrainjRisultatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
