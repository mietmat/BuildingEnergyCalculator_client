import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftContainerLibraryComponent } from './left-container-library.component';

describe('LeftContainerLibraryComponent', () => {
  let component: LeftContainerLibraryComponent;
  let fixture: ComponentFixture<LeftContainerLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftContainerLibraryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftContainerLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
