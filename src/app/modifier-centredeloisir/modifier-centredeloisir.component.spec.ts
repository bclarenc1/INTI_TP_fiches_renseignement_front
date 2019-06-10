import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierCentredeloisirComponent } from './modifier-centredeloisir.component';

describe('ModifierCentredeloisirComponent', () => {
  let component: ModifierCentredeloisirComponent;
  let fixture: ComponentFixture<ModifierCentredeloisirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierCentredeloisirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierCentredeloisirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
