import { TestBed } from '@angular/core/testing';

import { CertiService } from './certi.service';

describe('CertiService', () => {
  let service: CertiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CertiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
