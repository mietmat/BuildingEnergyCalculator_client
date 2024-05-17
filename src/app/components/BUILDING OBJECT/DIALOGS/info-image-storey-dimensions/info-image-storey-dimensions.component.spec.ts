import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoImageStoreyDimensionsComponent } from './info-image-storey-dimensions.component';

describe('InfoImageStoreyDimensionsComponent', () => {
  let component: InfoImageStoreyDimensionsComponent;
  let fixture: ComponentFixture<InfoImageStoreyDimensionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoImageStoreyDimensionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoImageStoreyDimensionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
