import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualDemandForPrimaryFinalUsableEnergyComponent } from './annual-demand-for-primary-final-usable-energy.component';

describe('AnnualDemandForPrimaryFinalUsableEnergyComponent', () => {
  let component: AnnualDemandForPrimaryFinalUsableEnergyComponent;
  let fixture: ComponentFixture<AnnualDemandForPrimaryFinalUsableEnergyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnualDemandForPrimaryFinalUsableEnergyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnualDemandForPrimaryFinalUsableEnergyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
