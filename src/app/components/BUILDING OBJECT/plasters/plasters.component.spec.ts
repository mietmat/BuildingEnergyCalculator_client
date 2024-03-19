import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlastersComponent } from './plasters.component';

describe('PlastersComponent', () => {
  let component: PlastersComponent;
  let fixture: ComponentFixture<PlastersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlastersComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PlastersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
