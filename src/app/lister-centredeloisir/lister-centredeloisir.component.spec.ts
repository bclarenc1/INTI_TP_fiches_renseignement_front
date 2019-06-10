import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerCentredeloisirComponent } from './lister-centredeloisir.component';

describe('ListerCentredeloisirComponent', () => {
  let component: ListerCentredeloisirComponent;
  let fixture: ComponentFixture<ListerCentredeloisirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListerCentredeloisirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerCentredeloisirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
