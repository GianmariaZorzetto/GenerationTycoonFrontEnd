import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SchermataBrainjComponent} from './schermata-brainj.component';

describe('SchermataBrainjComponent', () => {
  let component: SchermataBrainjComponent;
  let fixture: ComponentFixture<SchermataBrainjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchermataBrainjComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SchermataBrainjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
