import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoWindowsAreaComponent } from './info-windows-area.component';

describe('InfoWindowsAreaComponent', () => {
  let component: InfoWindowsAreaComponent;
  let fixture: ComponentFixture<InfoWindowsAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoWindowsAreaComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(InfoWindowsAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
