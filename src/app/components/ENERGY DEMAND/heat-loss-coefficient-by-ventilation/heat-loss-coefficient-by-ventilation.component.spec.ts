import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatLossCoefficientByVentilationComponent } from './heat-loss-coefficient-by-ventilation.component';

describe('HeatLossCoefficientByVentilationComponent', () => {
  let component: HeatLossCoefficientByVentilationComponent;
  let fixture: ComponentFixture<HeatLossCoefficientByVentilationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeatLossCoefficientByVentilationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeatLossCoefficientByVentilationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
