import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialCostsComponent } from './material-costs.component';

describe('MaterialCostsComponent', () => {
  let component: MaterialCostsComponent;
  let fixture: ComponentFixture<MaterialCostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialCostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialCostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
