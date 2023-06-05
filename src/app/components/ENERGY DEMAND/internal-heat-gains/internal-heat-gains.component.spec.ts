import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalHeatGainsComponent } from './internal-heat-gains.component';

describe('InternalHeatGainsComponent', () => {
  let component: InternalHeatGainsComponent;
  let fixture: ComponentFixture<InternalHeatGainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalHeatGainsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternalHeatGainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
