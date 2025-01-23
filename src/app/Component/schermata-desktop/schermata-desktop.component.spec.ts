import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchermataDesktopComponent } from './schermata-desktop.component';

describe('SchermataDesktopComponent', () => {
  let component: SchermataDesktopComponent;
  let fixture: ComponentFixture<SchermataDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchermataDesktopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchermataDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
