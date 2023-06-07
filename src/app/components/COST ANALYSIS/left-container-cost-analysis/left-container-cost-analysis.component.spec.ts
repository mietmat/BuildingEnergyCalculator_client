import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftContainerCostAnalysisComponent } from './left-container-cost-analysis.component';

describe('LeftContainerCostAnalysisComponent', () => {
  let component: LeftContainerCostAnalysisComponent;
  let fixture: ComponentFixture<LeftContainerCostAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftContainerCostAnalysisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftContainerCostAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
