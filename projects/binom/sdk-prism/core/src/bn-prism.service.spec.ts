import { TestBed } from '@angular/core/testing';

import { BnPrismService } from './bn-prism.service';

describe('BnPrismService', () => {
  let service: BnPrismService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BnPrismService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
