import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoImageBuildingExternalDimensionsComponent } from './info-image-Building-external-dimensions.component';

describe('InfoImageBuildingExternalDimensionsComponent', () => {
  let component: InfoImageBuildingExternalDimensionsComponent;
  let fixture: ComponentFixture<InfoImageBuildingExternalDimensionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoImageBuildingExternalDimensionsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(InfoImageBuildingExternalDimensionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
