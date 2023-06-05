import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingEnergyPerformanceCertificateComponent } from './building-energy-performance-certificate.component';

describe('BuildingEnergyPerformanceCertificateComponent', () => {
  let component: BuildingEnergyPerformanceCertificateComponent;
  let fixture: ComponentFixture<BuildingEnergyPerformanceCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingEnergyPerformanceCertificateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildingEnergyPerformanceCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
