import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingMaterialsComponent } from './building-materials.component';

describe('BuildingMaterialsComponent', () => {
  let component: BuildingMaterialsComponent;
  let fixture: ComponentFixture<BuildingMaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingMaterialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildingMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
