import { TestBed, inject } from '@angular/core/testing';

import { PostersService } from './posters.service';

describe('PostersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostersService]
    });
  });

  it('should be created', inject([PostersService], (service: PostersService) => {
    expect(service).toBeTruthy();
  }));
});
