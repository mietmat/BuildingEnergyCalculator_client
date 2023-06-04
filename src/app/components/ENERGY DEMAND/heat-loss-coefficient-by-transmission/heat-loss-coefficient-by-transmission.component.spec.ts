import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatLossCoefficientByTransmissionComponent } from './heat-loss-coefficient-by-transmission.component';

describe('HeatLossCoefficientByTransmissionComponent', () => {
  let component: HeatLossCoefficientByTransmissionComponent;
  let fixture: ComponentFixture<HeatLossCoefficientByTransmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeatLossCoefficientByTransmissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeatLossCoefficientByTransmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
