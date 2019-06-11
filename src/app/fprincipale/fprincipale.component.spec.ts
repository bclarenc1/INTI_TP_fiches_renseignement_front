import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FprincipaleComponent } from './fprincipale.component';

describe('FprincipaleComponent', () => {
  let component: FprincipaleComponent;
  let fixture: ComponentFixture<FprincipaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FprincipaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FprincipaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
