import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftContainerProjectComponent } from './left-container-project.component';

describe('LeftContainerProjectComponent', () => {
  let component: LeftContainerProjectComponent;
  let fixture: ComponentFixture<LeftContainerProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftContainerProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftContainerProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
