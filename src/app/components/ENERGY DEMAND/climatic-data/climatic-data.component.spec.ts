import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimaticDataComponent } from './climatic-data.component';

describe('ClimaticDataComponent', () => {
  let component: ClimaticDataComponent;
  let fixture: ComponentFixture<ClimaticDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClimaticDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClimaticDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
