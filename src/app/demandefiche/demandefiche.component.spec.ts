import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeficheComponent } from './demandefiche.component';

describe('DemandeficheComponent', () => {
  let component: DemandeficheComponent;
  let fixture: ComponentFixture<DemandeficheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeficheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeficheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
