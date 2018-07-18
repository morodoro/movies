import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvSeriesViewComponent } from './tv-series-view.component';

describe('TvSeriesViewComponent', () => {
  let component: TvSeriesViewComponent;
  let fixture: ComponentFixture<TvSeriesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvSeriesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvSeriesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
