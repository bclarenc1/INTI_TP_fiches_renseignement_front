import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FmedicaleComponent } from './fmedicale.component';

describe('FmedicaleComponent', () => {
  let component: FmedicaleComponent;
  let fixture: ComponentFixture<FmedicaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FmedicaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FmedicaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
