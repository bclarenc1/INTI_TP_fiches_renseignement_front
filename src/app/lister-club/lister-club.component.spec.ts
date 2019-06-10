import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerClubComponent } from './lister-club.component';

describe('ListerClubComponent', () => {
  let component: ListerClubComponent;
  let fixture: ComponentFixture<ListerClubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListerClubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
