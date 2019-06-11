import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FimageComponent } from './fimage.component';

describe('FimageComponent', () => {
  let component: FimageComponent;
  let fixture: ComponentFixture<FimageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FimageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
