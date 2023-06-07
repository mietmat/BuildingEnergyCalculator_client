import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvpComponent } from './nvp.component';

describe('NvpComponent', () => {
  let component: NvpComponent;
  let fixture: ComponentFixture<NvpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NvpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
