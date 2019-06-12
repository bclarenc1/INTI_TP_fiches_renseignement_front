import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttribuerEnfRespComponent } from './attribuer-enf-resp.component';

describe('AttribuerEnfRespComponent', () => {
  let component: AttribuerEnfRespComponent;
  let fixture: ComponentFixture<AttribuerEnfRespComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttribuerEnfRespComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttribuerEnfRespComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
