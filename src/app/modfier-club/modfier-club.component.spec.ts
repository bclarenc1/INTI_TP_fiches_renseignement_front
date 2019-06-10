import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModfierClubComponent } from './modfier-club.component';

describe('ModfierClubComponent', () => {
  let component: ModfierClubComponent;
  let fixture: ComponentFixture<ModfierClubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModfierClubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModfierClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
