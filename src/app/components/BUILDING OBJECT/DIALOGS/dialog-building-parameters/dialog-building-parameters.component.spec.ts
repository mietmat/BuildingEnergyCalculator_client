import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBuildingParametersComponent } from './dialog-building-parameters.component';

describe('DialogBuildingParametersComponent', () => {
  let component: DialogBuildingParametersComponent;
  let fixture: ComponentFixture<DialogBuildingParametersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogBuildingParametersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogBuildingParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
