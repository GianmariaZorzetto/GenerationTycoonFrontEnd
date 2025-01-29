import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SchermataKaboomComponent} from './schermata-kaboom.component';

describe('SchermataKaboomComponent', () => {
  let component: SchermataKaboomComponent;
  let fixture: ComponentFixture<SchermataKaboomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchermataKaboomComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SchermataKaboomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
