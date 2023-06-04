import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloorOnTheGroundComponent } from './floor-on-the-ground.component';

describe('FloorOnTheGroundComponent', () => {
  let component: FloorOnTheGroundComponent;
  let fixture: ComponentFixture<FloorOnTheGroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloorOnTheGroundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FloorOnTheGroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
