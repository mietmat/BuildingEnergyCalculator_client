import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatLossByTransmissionAndVentilationComponent } from './heat-loss-by-transmission-and-ventilation.component';

describe('HeatLossByTransmissionAndVentilationComponent', () => {
  let component: HeatLossByTransmissionAndVentilationComponent;
  let fixture: ComponentFixture<HeatLossByTransmissionAndVentilationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeatLossByTransmissionAndVentilationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeatLossByTransmissionAndVentilationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
