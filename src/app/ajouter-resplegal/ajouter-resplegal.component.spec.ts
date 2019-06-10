import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterResplegalComponent } from './ajouter-resplegal.component';

describe('AjouterResplegalComponent', () => {
  let component: AjouterResplegalComponent;
  let fixture: ComponentFixture<AjouterResplegalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterResplegalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterResplegalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
