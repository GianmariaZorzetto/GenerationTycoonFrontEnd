import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SchermataBenvenutoComponent} from './schermata-benvenuto.component';

describe('SchermataBenvenutoComponent', () => {
  let component: SchermataBenvenutoComponent;
  let fixture: ComponentFixture<SchermataBenvenutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchermataBenvenutoComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SchermataBenvenutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
