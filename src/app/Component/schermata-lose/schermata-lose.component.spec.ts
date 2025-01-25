import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SchermataLoseComponent} from './schermata-lose.component';

describe('SchermataLoseComponent', () => {
  let component: SchermataLoseComponent;
  let fixture: ComponentFixture<SchermataLoseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchermataLoseComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SchermataLoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
