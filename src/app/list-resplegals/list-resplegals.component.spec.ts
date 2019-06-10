import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListResplegalsComponent } from './list-resplegals.component';

describe('ListResplegalsComponent', () => {
  let component: ListResplegalsComponent;
  let fixture: ComponentFixture<ListResplegalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListResplegalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListResplegalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
