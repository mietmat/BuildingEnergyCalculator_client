import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftContainerEnergyDemandComponent } from './left-container-energy-demand.component';

describe('LeftContainerEnergyDemandComponent', () => {
  let component: LeftContainerEnergyDemandComponent;
  let fixture: ComponentFixture<LeftContainerEnergyDemandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftContainerEnergyDemandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftContainerEnergyDemandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
