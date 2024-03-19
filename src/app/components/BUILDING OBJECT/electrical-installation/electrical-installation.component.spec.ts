import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricalInstallationComponent } from './electrical-installation.component';

describe('ElectricalInstallationComponent', () => {
  let component: ElectricalInstallationComponent;
  let fixture: ComponentFixture<ElectricalInstallationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElectricalInstallationComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ElectricalInstallationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
