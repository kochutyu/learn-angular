import { TestBed } from '@angular/core/testing';

import { SamsungService } from './samsung.service';

describe('SamsungService', () => {
  let service: SamsungService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SamsungService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
