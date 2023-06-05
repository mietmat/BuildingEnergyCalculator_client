import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatGainsFromSolarRadiationComponent } from './heat-gains-from-solar-radiation.component';

describe('HeatGainsFromSolarRadiationComponent', () => {
  let component: HeatGainsFromSolarRadiationComponent;
  let fixture: ComponentFixture<HeatGainsFromSolarRadiationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeatGainsFromSolarRadiationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeatGainsFromSolarRadiationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
