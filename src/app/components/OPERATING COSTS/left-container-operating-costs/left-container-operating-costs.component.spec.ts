import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftContainerOperatingCostsComponent } from './left-container-operating-costs.component';

describe('LeftContainerOperatingCostsComponent', () => {
  let component: LeftContainerOperatingCostsComponent;
  let fixture: ComponentFixture<LeftContainerOperatingCostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftContainerOperatingCostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftContainerOperatingCostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
