import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoDoorsAreaComponent } from './info-doors-area.component';

describe('InfoDoorsAreaComponent', () => {
  let component: InfoDoorsAreaComponent;
  let fixture: ComponentFixture<InfoDoorsAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoDoorsAreaComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(InfoDoorsAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
