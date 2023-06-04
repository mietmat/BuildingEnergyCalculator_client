import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBuildingInformationComponent } from './dialog-building-information.component';

describe('DialogBuildingInformationComponent', () => {
  let component: DialogBuildingInformationComponent;
  let fixture: ComponentFixture<DialogBuildingInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogBuildingInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogBuildingInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
