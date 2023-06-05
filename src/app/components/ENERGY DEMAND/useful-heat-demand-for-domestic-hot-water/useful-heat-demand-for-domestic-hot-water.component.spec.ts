import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsefulHeatDemandForDomesticHotWaterComponent } from './useful-heat-demand-for-domestic-hot-water.component';

describe('UsefulHeatDemandForDomesticHotWaterComponent', () => {
  let component: UsefulHeatDemandForDomesticHotWaterComponent;
  let fixture: ComponentFixture<UsefulHeatDemandForDomesticHotWaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsefulHeatDemandForDomesticHotWaterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsefulHeatDemandForDomesticHotWaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
