import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SchermataDifficoltaComponent} from './schermata-difficolta.component';

describe('SchermataDifficoltaComponent', () => {
  let component: SchermataDifficoltaComponent;
  let fixture: ComponentFixture<SchermataDifficoltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchermataDifficoltaComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SchermataDifficoltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
