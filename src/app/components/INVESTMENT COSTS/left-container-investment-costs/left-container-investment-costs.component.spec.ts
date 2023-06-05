import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftContainerInvestmentCostsComponent } from './left-container-investment-costs.component';

describe('LeftContainerInvestmentCostsComponent', () => {
  let component: LeftContainerInvestmentCostsComponent;
  let fixture: ComponentFixture<LeftContainerInvestmentCostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftContainerInvestmentCostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftContainerInvestmentCostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
