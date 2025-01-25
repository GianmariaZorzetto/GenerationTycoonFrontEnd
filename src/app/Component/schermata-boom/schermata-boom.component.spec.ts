import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SchermataBoomComponent} from './schermata-boom.component';

describe('SchermataBoomComponent', () => {
  let component: SchermataBoomComponent;
  let fixture: ComponentFixture<SchermataBoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchermataBoomComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SchermataBoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
