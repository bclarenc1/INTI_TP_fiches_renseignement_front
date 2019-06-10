import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierResplegalComponent } from './modifier-resplegal.component';

describe('ModifierResplegalComponent', () => {
  let component: ModifierResplegalComponent;
  let fixture: ComponentFixture<ModifierResplegalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierResplegalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierResplegalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
