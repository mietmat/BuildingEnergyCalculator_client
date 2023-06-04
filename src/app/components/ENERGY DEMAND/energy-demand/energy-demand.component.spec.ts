import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyDemandComponent } from './energy-demand.component';

describe('EnergyDemandComponent', () => {
  let component: EnergyDemandComponent;
  let fixture: ComponentFixture<EnergyDemandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnergyDemandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnergyDemandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
