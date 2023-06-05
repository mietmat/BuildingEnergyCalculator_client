import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalEnergyDemandForLightingComponent } from './final-energy-demand-for-lighting.component';

describe('FinalEnergyDemandForLightingComponent', () => {
  let component: FinalEnergyDemandForLightingComponent;
  let fixture: ComponentFixture<FinalEnergyDemandForLightingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalEnergyDemandForLightingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalEnergyDemandForLightingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
