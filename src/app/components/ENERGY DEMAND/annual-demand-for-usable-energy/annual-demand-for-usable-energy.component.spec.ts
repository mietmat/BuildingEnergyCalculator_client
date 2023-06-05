import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualDemandForUsableEnergyComponent } from './annual-demand-for-usable-energy.component';

describe('AnnualDemandForUsableEnergyComponent', () => {
  let component: AnnualDemandForUsableEnergyComponent;
  let fixture: ComponentFixture<AnnualDemandForUsableEnergyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnualDemandForUsableEnergyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnualDemandForUsableEnergyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
