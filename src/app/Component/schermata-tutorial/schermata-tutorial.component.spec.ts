import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchermataTutorialComponent } from './schermata-tutorial.component';

describe('SchermataTutorialComponent', () => {
  let component: SchermataTutorialComponent;
  let fixture: ComponentFixture<SchermataTutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchermataTutorialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchermataTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
