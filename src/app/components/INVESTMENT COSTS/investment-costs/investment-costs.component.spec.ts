import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentCostsComponent } from './investment-costs.component';

describe('InvestmentCostsComponent', () => {
  let component: InvestmentCostsComponent;
  let fixture: ComponentFixture<InvestmentCostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmentCostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestmentCostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
