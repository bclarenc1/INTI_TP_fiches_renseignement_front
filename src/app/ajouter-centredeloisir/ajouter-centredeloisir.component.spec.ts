import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterCentredeloisirComponent } from './ajouter-centredeloisir.component';

describe('AjouterCentredeloisirComponent', () => {
  let component: AjouterCentredeloisirComponent;
  let fixture: ComponentFixture<AjouterCentredeloisirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterCentredeloisirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterCentredeloisirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
