import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostersGalleryViewComponent } from './posters-gallery-view.component';

describe('PostersGalleryViewComponent', () => {
  let component: PostersGalleryViewComponent;
  let fixture: ComponentFixture<PostersGalleryViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostersGalleryViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostersGalleryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
