import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatDemandForDomesticHotWaterPreparationComponent } from './heat-demand-for-domestic-hot-water-preparation.component';

describe('HeatDemandForDomesticHotWaterPreparationComponent', () => {
  let component: HeatDemandForDomesticHotWaterPreparationComponent;
  let fixture: ComponentFixture<HeatDemandForDomesticHotWaterPreparationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeatDemandForDomesticHotWaterPreparationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeatDemandForDomesticHotWaterPreparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
