import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerEcoleComponent } from './lister-ecole.component';

describe('ListerEcoleComponent', () => {
  let component: ListerEcoleComponent;
  let fixture: ComponentFixture<ListerEcoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListerEcoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerEcoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
