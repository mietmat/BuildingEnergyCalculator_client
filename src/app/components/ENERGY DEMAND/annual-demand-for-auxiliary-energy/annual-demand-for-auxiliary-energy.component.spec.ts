import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualDemandForAuxiliaryEnergyComponent } from './annual-demand-for-auxiliary-energy.component';

describe('AnnualDemandForAuxiliaryEnergyComponent', () => {
  let component: AnnualDemandForAuxiliaryEnergyComponent;
  let fixture: ComponentFixture<AnnualDemandForAuxiliaryEnergyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnualDemandForAuxiliaryEnergyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnualDemandForAuxiliaryEnergyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
