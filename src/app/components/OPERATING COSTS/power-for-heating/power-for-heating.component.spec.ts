import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerForHeatingComponent } from './power-for-heating.component';

describe('PowerForHeatingComponent', () => {
  let component: PowerForHeatingComponent;
  let fixture: ComponentFixture<PowerForHeatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PowerForHeatingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PowerForHeatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
