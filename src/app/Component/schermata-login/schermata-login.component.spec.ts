import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SchermataLoginComponent} from './schermata-login.component';

describe('SchermataLoginComponent', () => {
  let component: SchermataLoginComponent;
  let fixture: ComponentFixture<SchermataLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchermataLoginComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SchermataLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
