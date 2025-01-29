import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LibroVerdeComponent} from './libro-verde.component';

describe('LibroVerdeComponent', () => {
  let component: LibroVerdeComponent;
  let fixture: ComponentFixture<LibroVerdeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibroVerdeComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LibroVerdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
