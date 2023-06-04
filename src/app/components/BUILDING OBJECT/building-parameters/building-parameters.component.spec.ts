import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingParametersComponent } from './building-parameters.component';

describe('BuildingParametersComponent', () => {
  let component: BuildingParametersComponent;
  let fixture: ComponentFixture<BuildingParametersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingParametersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildingParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
