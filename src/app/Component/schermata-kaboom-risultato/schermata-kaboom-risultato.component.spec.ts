import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchermataKaboomRisultatoComponent } from './schermata-kaboom-risultato.component';

describe('SchermataKaboomRisultatoComponent', () => {
  let component: SchermataKaboomRisultatoComponent;
  let fixture: ComponentFixture<SchermataKaboomRisultatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchermataKaboomRisultatoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchermataKaboomRisultatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
