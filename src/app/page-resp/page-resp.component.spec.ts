import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRespComponent } from './page-resp.component';

describe('PageRespComponent', () => {
  let component: PageRespComponent;
  let fixture: ComponentFixture<PageRespComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageRespComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageRespComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
