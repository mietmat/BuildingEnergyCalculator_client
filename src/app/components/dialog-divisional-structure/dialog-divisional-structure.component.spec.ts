import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDivisionalStructureComponent } from './dialog-divisional-structure.component';

describe('DialogDivisionalStructureComponent', () => {
  let component: DialogDivisionalStructureComponent;
  let fixture: ComponentFixture<DialogDivisionalStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDivisionalStructureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogDivisionalStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
