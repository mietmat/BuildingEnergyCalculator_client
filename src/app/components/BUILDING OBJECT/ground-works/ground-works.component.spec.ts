import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroundWorksComponent } from './ground-works.component';

describe('GroundWorksComponent', () => {
  let component: GroundWorksComponent;
  let fixture: ComponentFixture<GroundWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GroundWorksComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(GroundWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
