import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDoorComponent } from './dialog-door.component';

describe('DialogDoorComponent', () => {
  let component: DialogDoorComponent;
  let fixture: ComponentFixture<DialogDoorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDoorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogDoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
