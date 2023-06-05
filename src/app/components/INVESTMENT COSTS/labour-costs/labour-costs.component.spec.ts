import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabourCostsComponent } from './labour-costs.component';

describe('LabourCostsComponent', () => {
  let component: LabourCostsComponent;
  let fixture: ComponentFixture<LabourCostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabourCostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabourCostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
