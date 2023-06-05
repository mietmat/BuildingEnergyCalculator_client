import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualEnergyCostComponent } from './annual-energy-cost.component';

describe('AnnualEnergyCostComponent', () => {
  let component: AnnualEnergyCostComponent;
  let fixture: ComponentFixture<AnnualEnergyCostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnualEnergyCostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnualEnergyCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
