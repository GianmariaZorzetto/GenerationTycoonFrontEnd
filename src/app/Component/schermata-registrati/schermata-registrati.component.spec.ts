import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SchermataRegistratiComponent} from './schermata-registrati.component';

describe('SchermataRegistratiComponent', () => {
  let component: SchermataRegistratiComponent;
  let fixture: ComponentFixture<SchermataRegistratiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchermataRegistratiComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SchermataRegistratiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
