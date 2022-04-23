import { TestBed } from '@angular/core/testing';

import { IphoneService } from './iphone.service';

describe('IphoneService', () => {
  let service: IphoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IphoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
