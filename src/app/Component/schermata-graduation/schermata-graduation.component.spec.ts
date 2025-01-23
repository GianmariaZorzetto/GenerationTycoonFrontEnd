import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchermataGraduationComponent } from './schermata-graduation.component';

describe('SchermataGraduationComponent', () => {
  let component: SchermataGraduationComponent;
  let fixture: ComponentFixture<SchermataGraduationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchermataGraduationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchermataGraduationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
