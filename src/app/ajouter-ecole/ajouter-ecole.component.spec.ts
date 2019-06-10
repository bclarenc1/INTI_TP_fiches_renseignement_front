import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterEcoleComponent } from './ajouter-ecole.component';

describe('AjouterEcoleComponent', () => {
  let component: AjouterEcoleComponent;
  let fixture: ComponentFixture<AjouterEcoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterEcoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterEcoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
