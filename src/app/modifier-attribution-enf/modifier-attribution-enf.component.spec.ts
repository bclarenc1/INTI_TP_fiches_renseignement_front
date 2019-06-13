import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierAttributionEnfComponent } from './modifier-attribution-enf.component';

describe('ModifierAttributionEnfComponent', () => {
  let component: ModifierAttributionEnfComponent;
  let fixture: ComponentFixture<ModifierAttributionEnfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierAttributionEnfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierAttributionEnfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
