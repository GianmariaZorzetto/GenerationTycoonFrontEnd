import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchermataBrainj_dinamicaComponent } from './schermata-brainj_dinamica.component';

describe('SchermataBrainjComponent', () => {
  let component: SchermataBrainj_dinamicaComponent;
  let fixture: ComponentFixture<SchermataBrainj_dinamicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchermataBrainj_dinamicaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchermataBrainj_dinamicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
