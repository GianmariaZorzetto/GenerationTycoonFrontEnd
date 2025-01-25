import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LibroBluComponent} from './libro-blu.component';

describe('LibroBluComponent', () => {
  let component: LibroBluComponent;
  let fixture: ComponentFixture<LibroBluComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibroBluComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LibroBluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
