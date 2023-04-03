import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingObjectComponent } from './building-object.component';

describe('BuildingObjectComponent', () => {
  let component: BuildingObjectComponent;
  let fixture: ComponentFixture<BuildingObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingObjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildingObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
