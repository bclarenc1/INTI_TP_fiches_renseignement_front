import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierEcoleComponent } from './modifier-ecole.component';

describe('ModifierEcoleComponent', () => {
  let component: ModifierEcoleComponent;
  let fixture: ComponentFixture<ModifierEcoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierEcoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierEcoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
