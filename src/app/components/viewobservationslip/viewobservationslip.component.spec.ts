import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewobservationslipComponent } from './viewobservationslip.component';

describe('ViewobservationslipComponent', () => {
  let component: ViewobservationslipComponent;
  let fixture: ComponentFixture<ViewobservationslipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewobservationslipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewobservationslipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
