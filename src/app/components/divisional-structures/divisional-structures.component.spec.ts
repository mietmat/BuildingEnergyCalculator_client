import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisionalStructuresComponent } from './divisional-structures.component';

describe('DivisionalStructuresComponent', () => {
  let component: DivisionalStructuresComponent;
  let fixture: ComponentFixture<DivisionalStructuresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivisionalStructuresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivisionalStructuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
