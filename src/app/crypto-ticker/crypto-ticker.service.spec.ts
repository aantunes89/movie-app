import { TestBed } from '@angular/core/testing';

import { CryptoTickerService } from './crypto-ticker.service';

describe('CryptoTickerService', () => {
  let service: CryptoTickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CryptoTickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
