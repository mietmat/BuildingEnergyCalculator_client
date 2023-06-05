import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandForUsableAndFinalEnergyForPreparationOfDomesticHotWaterComponent } from './demand-for-usable-and-final-energy-for-preparation-of-domestic-hot-water.component';

describe('DemandForUsableAndFinalEnergyForPreparationOfDomesticHotWaterComponent', () => {
  let component: DemandForUsableAndFinalEnergyForPreparationOfDomesticHotWaterComponent;
  let fixture: ComponentFixture<DemandForUsableAndFinalEnergyForPreparationOfDomesticHotWaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandForUsableAndFinalEnergyForPreparationOfDomesticHotWaterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandForUsableAndFinalEnergyForPreparationOfDomesticHotWaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
