import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFloorOnTheGroundComponent } from './dialog-floor-on-the-ground.component';

describe('DialogFloorOnTheGroundComponent', () => {
  let component: DialogFloorOnTheGroundComponent;
  let fixture: ComponentFixture<DialogFloorOnTheGroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogFloorOnTheGroundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogFloorOnTheGroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
