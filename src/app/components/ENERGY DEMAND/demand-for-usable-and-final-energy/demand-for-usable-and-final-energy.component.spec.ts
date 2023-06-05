import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandForUsableAndFianlEnergyComponent } from './demand-for-usable-and-final-energy.component';

describe('DemandForUsableAndFianlEnergyComponent', () => {
  let component: DemandForUsableAndFianlEnergyComponent;
  let fixture: ComponentFixture<DemandForUsableAndFianlEnergyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandForUsableAndFianlEnergyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandForUsableAndFianlEnergyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
