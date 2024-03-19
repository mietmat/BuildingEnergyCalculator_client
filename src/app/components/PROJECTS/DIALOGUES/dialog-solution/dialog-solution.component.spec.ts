import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSolutionComponent } from './dialog-solution.component';

describe('DialogSolutionComponent', () => {
  let component: DialogSolutionComponent;
  let fixture: ComponentFixture<DialogSolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSolutionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
