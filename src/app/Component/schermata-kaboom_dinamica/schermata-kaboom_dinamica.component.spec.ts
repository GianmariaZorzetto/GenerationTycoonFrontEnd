import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchermataKaboom_dinamicaComponent } from './schermata-kaboom_dinamica.component';

describe('SchermataKaboomComponent', () => {
  let component: SchermataKaboom_dinamicaComponent;
  let fixture: ComponentFixture<SchermataKaboom_dinamicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchermataKaboom_dinamicaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchermataKaboom_dinamicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
