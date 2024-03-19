import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanitaryInstallationComponent } from './sanitary-installation.component';

describe('SanitaryInstallationComponent', () => {
  let component: SanitaryInstallationComponent;
  let fixture: ComponentFixture<SanitaryInstallationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SanitaryInstallationComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SanitaryInstallationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
